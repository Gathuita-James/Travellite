"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export function SearchForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
    passengers: "1",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.origin.trim()) {
      newErrors.origin = "Origin is required"
    }
    if (!formData.destination.trim()) {
      newErrors.destination = "Destination is required"
    }
    if (!formData.date) {
      newErrors.date = "Date is required"
    }
    if (formData.origin === formData.destination) {
      newErrors.destination = "Destination must be different from origin"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      const params = new URLSearchParams({
        origin: formData.origin,
        destination: formData.destination,
        date: formData.date,
        passengers: formData.passengers,
      })

      router.push(`/results?${params.toString()}`)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const isFormValid =
    formData.origin && formData.destination && formData.date && formData.origin !== formData.destination

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="origin">From</Label>
              <Input
                id="origin"
                placeholder="Origin city"
                value={formData.origin}
                onChange={(e) => handleInputChange("origin", e.target.value)}
                className={errors.origin ? "border-red-500" : ""}
              />
              {errors.origin && <p className="text-sm text-red-500">{errors.origin}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="destination">To</Label>
              <Input
                id="destination"
                placeholder="Destination city"
                value={formData.destination}
                onChange={(e) => handleInputChange("destination", e.target.value)}
                className={errors.destination ? "border-red-500" : ""}
              />
              {errors.destination && <p className="text-sm text-red-500">{errors.destination}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className={errors.date ? "border-red-500" : ""}
              />
              {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="passengers">Passengers</Label>
              <Input
                id="passengers"
                type="number"
                min="1"
                max="9"
                value={formData.passengers}
                onChange={(e) => handleInputChange("passengers", e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button type="submit" size="lg" className="px-8" disabled={!isFormValid}>
              Search Buses
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
