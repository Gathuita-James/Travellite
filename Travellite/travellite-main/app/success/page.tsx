"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BookingDetails {
  referenceCode: string
  items: any[]
  total: number
  customerInfo: any
  bookingDate: string
}

function SuccessContent() {
  const searchParams = useSearchParams()
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null)
  const referenceCode = searchParams.get("ref")

  useEffect(() => {
    const storedDetails = sessionStorage.getItem("bookingDetails")
    if (storedDetails) {
      setBookingDetails(JSON.parse(storedDetails))
    }
  }, [])

  if (!bookingDetails || !referenceCode) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <Card>
              <CardContent className="p-12 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Not Found</h1>
                <p className="text-gray-600 mb-6">We couldn't find your booking details.</p>
                <Link href="/">
                  <Button>Back to Home</Button>
                </Link>
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
          <div className="max-w-2xl mx-auto">
            {/* Success Message */}
            <Card className="mb-6">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
                <p className="text-gray-600 mb-4">Your bus tickets have been successfully booked.</p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 mb-1">Booking Reference</p>
                  <p className="text-2xl font-bold text-blue-600">{referenceCode}</p>
                </div>
                <p className="text-sm text-gray-600">
                  Please save this reference number for your records. You'll need it for check-in.
                </p>
              </CardContent>
            </Card>

            {/* Booking Details */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Booking Details</h2>
                <div className="space-y-4">
                  {bookingDetails.items.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{item.operator.name}</h3>
                          <p className="text-gray-600">
                            {item.schedule.stops[0]} → {item.schedule.stops[item.schedule.stops.length - 1]}
                          </p>
                        </div>
                        <Badge variant="secondary">{item.fare.class}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Departure:</span>{" "}
                          {new Date(item.schedule.depart_at).toLocaleString()}
                        </div>
                        <div>
                          <span className="font-medium">Passengers:</span> {item.quantity}
                        </div>
                        <div>
                          <span className="font-medium">Price:</span> KES {item.fare.amount.toLocaleString()} x{" "}
                          {item.quantity}
                        </div>
                        <div>
                          <span className="font-medium">Subtotal:</span> KES{" "}
                          {(item.fare.amount * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-green-600">KES {bookingDetails.total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Passenger Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-600">Name:</span>
                    <p>
                      {bookingDetails.customerInfo.firstName} {bookingDetails.customerInfo.lastName}
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Email:</span>
                    <p>{bookingDetails.customerInfo.email}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">Phone:</span>
                    <p>{bookingDetails.customerInfo.phone}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-600">ID Number:</span>
                    <p>{bookingDetails.customerInfo.idNumber}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">What's Next?</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>A confirmation email has been sent to {bookingDetails.customerInfo.email}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Arrive at the departure point 30 minutes before your scheduled departure time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Bring a valid ID and your booking reference number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Contact customer service at +254 700 000 000 if you need assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Book Another Trip
                </Button>
              </Link>
              <Button onClick={() => window.print()} className="flex-1" variant="outline">
                Print Booking
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
