"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import type { CartItem as CartItemType } from "@/types"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  const departTime = new Date(item.schedule.depart_at).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const arriveTime = new Date(item.schedule.arrive_at).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const duration = `${Math.floor(item.schedule.duration_minutes / 60)}h ${item.schedule.duration_minutes % 60}m`

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Trip Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-600">{item.operator.name.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.operator.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{item.schedule.bus_type}</Badge>
                  <Badge variant="outline">{item.fare.class}</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Route</p>
                <p className="font-medium">
                  {item.schedule.stops[0]} → {item.schedule.stops[item.schedule.stops.length - 1]}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Departure</p>
                <p className="font-medium">
                  {new Date(item.schedule.depart_at).toLocaleDateString()} at {departTime}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Duration</p>
                <p className="font-medium">{duration}</p>
              </div>
            </div>
          </div>

          {/* Quantity & Price */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 lg:min-w-[200px]">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.scheduleId, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </Button>
              <Input
                type="number"
                min="1"
                max="9"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.scheduleId, Math.max(1, Number.parseInt(e.target.value) || 1))}
                className="w-16 text-center"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.scheduleId, item.quantity + 1)}
                disabled={item.quantity >= 9}
              >
                +
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                KES {item.fare.amount.toLocaleString()} x {item.quantity}
              </p>
              <p className="text-xl font-bold text-green-600">
                KES {(item.fare.amount * item.quantity).toLocaleString()}
              </p>
            </div>

            <Button variant="destructive" size="sm" onClick={() => removeItem(item.scheduleId)}>
              Remove
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
