"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Fare } from "@/types"

interface FareSelectionProps {
  fares: Fare[]
  selectedFare: Fare | null
  onFareSelect: (fare: Fare) => void
  quantity: number
  onQuantityChange: (quantity: number) => void
  seatsAvailable: number
}

export function FareSelection({
  fares,
  selectedFare,
  onFareSelect,
  quantity,
  onQuantityChange,
  seatsAvailable,
}: FareSelectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Fare & Passengers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Fare Options */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Choose Class</Label>
          <div className="space-y-3">
            {fares.map((fare) => (
              <div
                key={fare.class}
                className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedFare?.class === fare.class
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => onFareSelect(fare)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{fare.class}</div>
                    <div className="text-sm text-gray-600">
                      {fare.class === "ECONOMY" && "Standard seating with basic amenities"}
                      {fare.class === "VIP" && "Premium seating with extra legroom"}
                      {fare.class === "LUXURY" && "Luxury seating with full recline"}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">KES {fare.amount.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div>
          <Label htmlFor="quantity" className="text-sm font-medium mb-2 block">
            Number of Passengers
          </Label>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              -
            </Button>
            <Input
              id="quantity"
              type="number"
              min="1"
              max={Math.min(9, seatsAvailable)}
              value={quantity}
              onChange={(e) => onQuantityChange(Math.max(1, Math.min(9, Number.parseInt(e.target.value) || 1)))}
              className="w-20 text-center"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => onQuantityChange(Math.min(Math.min(9, seatsAvailable), quantity + 1))}
              disabled={quantity >= Math.min(9, seatsAvailable)}
            >
              +
            </Button>
          </div>
          <p className="text-xs text-gray-600 mt-1">Maximum {Math.min(9, seatsAvailable)} passengers</p>
        </div>
      </CardContent>
    </Card>
  )
}
