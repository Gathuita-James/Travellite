"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface CheckoutFormProps {
  onSubmit: (formData: any) => void
  isProcessing: boolean
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  idNumber: string
  emergencyContact: string
  emergencyPhone: string
  specialRequests: string
}

export function CheckoutForm({ onSubmit, isProcessing }: CheckoutFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    idNumber: "",
    emergencyContact: "",
    emergencyPhone: "",
    specialRequests: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^(\+254|0)[17]\d{8}$/.test(formData.phone.replace(/\s/g, "")))
      newErrors.phone = "Please enter a valid Kenyan phone number"
    if (!formData.idNumber.trim()) newErrors.idNumber = "ID number is required"
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = "Emergency contact name is required"
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = "Emergency contact phone is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={errors.firstName ? "border-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={errors.lastName ? "border-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "border-red-500" : ""}
              disabled={isProcessing}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="+254 7XX XXX XXX"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={errors.phone ? "border-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="idNumber">ID Number *</Label>
              <Input
                id="idNumber"
                placeholder="12345678"
                value={formData.idNumber}
                onChange={(e) => handleInputChange("idNumber", e.target.value)}
                className={errors.idNumber ? "border-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.idNumber && <p className="text-sm text-red-500">{errors.idNumber}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Contact Name *</Label>
              <Input
                id="emergencyContact"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                className={errors.emergencyContact ? "border-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.emergencyContact && <p className="text-sm text-red-500">{errors.emergencyContact}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyPhone">Contact Phone *</Label>
              <Input
                id="emergencyPhone"
                placeholder="+254 7XX XXX XXX"
                value={formData.emergencyPhone}
                onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                className={errors.emergencyPhone ? "border-red-500" : ""}
                disabled={isProcessing}
              />
              {errors.emergencyPhone && <p className="text-sm text-red-500">{errors.emergencyPhone}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Requests */}
      <Card>
        <CardHeader>
          <CardTitle>Special Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Additional Information (Optional)</Label>
            <Textarea
              id="specialRequests"
              placeholder="Any special requirements, dietary needs, or accessibility requests..."
              value={formData.specialRequests}
              onChange={(e) => handleInputChange("specialRequests", e.target.value)}
              disabled={isProcessing}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isProcessing}>
        {isProcessing ? "Processing Payment..." : "Complete Booking"}
      </Button>
    </form>
  )
}
