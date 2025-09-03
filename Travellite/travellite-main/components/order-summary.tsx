import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"

interface OrderSummaryProps {
  total: number
  showItems?: boolean
}

export function OrderSummary({ total, showItems = false }: OrderSummaryProps) {
  const { items } = useCart()

  const subtotal = total
  const serviceFee = Math.round(total * 0.05) // 5% service fee
  const tax = Math.round((subtotal + serviceFee) * 0.16) // 16% VAT
  const finalTotal = subtotal + serviceFee + tax

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {showItems && (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div className="flex-1">
                  <p className="font-medium">{item.operator.name}</p>
                  <p className="text-gray-600">
                    {item.fare.class} x {item.quantity}
                  </p>
                </div>
                <p className="font-medium">KES {(item.fare.amount * item.quantity).toLocaleString()}</p>
              </div>
            ))}
            <hr />
          </div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>KES {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Service Fee</span>
            <span>KES {serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">VAT (16%)</span>
            <span>KES {tax.toLocaleString()}</span>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-green-600">KES {finalTotal.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
