"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartItem } from "@/components/cart-item"
import { OrderSummary } from "@/components/order-summary"
import { EmptyState } from "@/components/empty-state"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CartPage() {
  const router = useRouter()
  const { items, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <Card>
              <CardContent className="p-12">
                <EmptyState title="Your cart is empty" description="Add some bus tickets to your cart to get started" />
                <div className="flex justify-center mt-6">
                  <Link href="/">
                    <Button>Start Searching</Button>
                  </Link>
                </div>
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
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
            <p className="text-gray-600 mt-2">
              {items.length} item{items.length !== 1 ? "s" : ""} in your cart
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <CartItem key={`${item.scheduleId}-${item.fare.class}`} item={item} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <OrderSummary total={total} />
                <Button onClick={() => router.push("/checkout")} className="w-full mt-6" size="lg">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
