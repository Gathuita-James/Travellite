"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"
import { OrderSummary } from "@/components/order-summary"
import { useCart } from "@/hooks/use-cart"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <Card>
              <CardContent className="p-12 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">No Items to Checkout</h1>
                <p className="text-gray-600 mb-6">Your cart is empty. Add some tickets first.</p>
                <Link href="/">
                  <Button>Start Searching</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleCheckoutSubmit = async (formData: any) => {
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate reference code
    const referenceCode = `TL${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 4).toUpperCase()}`

    // Store booking details in sessionStorage for success page
    sessionStorage.setItem(
      "bookingDetails",
      JSON.stringify({
        referenceCode,
        items,
        total,
        customerInfo: formData,
        bookingDate: new Date().toISOString(),
      }),
    )

    // Clear cart
    clearCart()

    // Redirect to success page
    router.push(`/success?ref=${referenceCode}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <p className="text-gray-600 mt-2">Complete your booking</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <CheckoutForm onSubmit={handleCheckoutSubmit} isProcessing={isProcessing} />
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <OrderSummary total={total} showItems />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
