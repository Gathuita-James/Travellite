"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TripDetails } from "@/components/trip-details"
import { FareSelection } from "@/components/fare-selection"
import { TripPolicies } from "@/components/trip-policies"
import { RouteMap } from "@/components/route-map"
import { LoadingSkeleton } from "@/components/loading-skeleton"
import { getScheduleById, getOperators } from "@/services/data"
import { useCart } from "@/hooks/use-cart"
import type { Schedule, Operator, Fare } from "@/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCart()
  const [schedule, setSchedule] = useState<Schedule | null>(null)
  const [operator, setOperator] = useState<Operator | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedFare, setSelectedFare] = useState<Fare | null>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      if (!params.id) return

      setLoading(true)
      try {
        const [scheduleData, operatorsData] = await Promise.all([getScheduleById(params.id as string), getOperators()])

        if (scheduleData) {
          setSchedule(scheduleData)
          setSelectedFare(scheduleData.fares[0]) // Default to first fare
          const operatorData = operatorsData.find((op) => op.id === scheduleData.operator_id)
          setOperator(operatorData || null)
        }
      } catch (error) {
        console.error("Error fetching schedule details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.id])

  const handleAddToCart = () => {
    if (schedule && operator && selectedFare) {
      addItem(schedule, operator, selectedFare, quantity)
      router.push("/cart")
    }
  }

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

  if (!schedule || !operator) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <Card>
              <CardContent className="p-12 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Trip Not Found</h1>
                <p className="text-gray-600 mb-6">The trip you're looking for doesn't exist or has been removed.</p>
                <Button onClick={() => router.push("/")}>Back to Search</Button>
              </CardContent>
            </Card>
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
          {/* Back Button */}
          <Button variant="ghost" onClick={() => router.back()} className="mb-6">
            ← Back to Results
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <TripDetails schedule={schedule} operator={operator} />
              <RouteMap stops={schedule.stops} />
              <TripPolicies />
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <FareSelection
                  fares={schedule.fares}
                  selectedFare={selectedFare}
                  onFareSelect={setSelectedFare}
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                  seatsAvailable={schedule.seats_available}
                />

                {/* Booking Summary */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Route:</span>
                        <span className="font-medium">
                          {schedule.stops[0]} → {schedule.stops[schedule.stops.length - 1]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Operator:</span>
                        <span className="font-medium">{operator.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Departure:</span>
                        <span className="font-medium">
                          {new Date(schedule.depart_at).toLocaleString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Class:</span>
                        <span className="font-medium">{selectedFare?.class}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Passengers:</span>
                        <span className="font-medium">{quantity}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-green-600">
                          KES {((selectedFare?.amount || 0) * quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <Button onClick={handleAddToCart} className="w-full mt-6" size="lg">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
