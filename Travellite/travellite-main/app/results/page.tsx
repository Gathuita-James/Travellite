"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScheduleCard } from "@/components/schedule-card"
import { ResultsFilters } from "@/components/results-filters"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { EmptyState } from "@/components/empty-state"
import { getSchedules, getOperators } from "@/services/data"
import type { Schedule, Operator, SearchParams } from "@/types"

function ResultsContent() {
  const searchParams = useSearchParams()
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [operators, setOperators] = useState<Operator[]>([])
  const [filteredSchedules, setFilteredSchedules] = useState<Schedule[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    operators: [] as string[],
    timeWindow: "all",
    busType: "all",
    sortBy: "departure",
  })

  const searchQuery: SearchParams = {
    origin: searchParams.get("origin") || "",
    destination: searchParams.get("destination") || "",
    date: searchParams.get("date") || "",
    passengers: searchParams.get("passengers") || "1",
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [schedulesData, operatorsData] = await Promise.all([
          getSchedules({
            origin: searchQuery.origin,
            destination: searchQuery.destination,
            date: searchQuery.date,
          }),
          getOperators(),
        ])

        setSchedules(schedulesData)
        setOperators(operatorsData)
        setFilteredSchedules(schedulesData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [searchQuery.origin, searchQuery.destination, searchQuery.date])

  useEffect(() => {
    let filtered = [...schedules]

    // Filter by operators
    if (filters.operators.length > 0) {
      filtered = filtered.filter((schedule) => filters.operators.includes(schedule.operator_id))
    }

    // Filter by time window
    if (filters.timeWindow !== "all") {
      filtered = filtered.filter((schedule) => {
        const hour = new Date(schedule.depart_at).getHours()
        switch (filters.timeWindow) {
          case "morning":
            return hour >= 6 && hour < 12
          case "afternoon":
            return hour >= 12 && hour < 18
          case "evening":
            return hour >= 18 && hour < 24
          case "night":
            return hour >= 0 && hour < 6
          default:
            return true
        }
      })
    }

    // Filter by bus type
    if (filters.busType !== "all") {
      filtered = filtered.filter((schedule) => schedule.bus_type.toLowerCase() === filters.busType.toLowerCase())
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "price":
          return Math.min(...a.fares.map((f) => f.amount)) - Math.min(...b.fares.map((f) => f.amount))
        case "duration":
          return a.duration_minutes - b.duration_minutes
        case "departure":
        default:
          return new Date(a.depart_at).getTime() - new Date(b.depart_at).getTime()
      }
    })

    setFilteredSchedules(filtered)
  }, [schedules, filters])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <LoadingSkeleton />
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Search Summary */}
          <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-2">
              {searchQuery.origin} → {searchQuery.destination}
            </h1>
            <p className="text-gray-600">
              {new Date(searchQuery.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              • {searchQuery.passengers} passenger{Number.parseInt(searchQuery.passengers) > 1 ? "s" : ""}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {filteredSchedules.length} bus{filteredSchedules.length !== 1 ? "es" : ""} found
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ResultsFilters operators={operators} filters={filters} onFiltersChange={setFilters} />
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              {filteredSchedules.length === 0 ? (
                <EmptyState title="No buses found" description="Try adjusting your filters or search criteria" />
              ) : (
                <div className="space-y-4">
                  {filteredSchedules.map((schedule) => {
                    const operator = operators.find((op) => op.id === schedule.operator_id)
                    return <ScheduleCard key={schedule.id} schedule={schedule} operator={operator} />
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ResultsContent />
    </Suspense>
  )
}
