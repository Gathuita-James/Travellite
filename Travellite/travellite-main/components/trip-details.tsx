import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Schedule, Operator } from "@/types"

interface TripDetailsProps {
  schedule: Schedule
  operator: Operator
}

export function TripDetails({ schedule, operator }: TripDetailsProps) {
  const departTime = new Date(schedule.depart_at).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const arriveTime = new Date(schedule.arrive_at).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const duration = `${Math.floor(schedule.duration_minutes / 60)}h ${schedule.duration_minutes % 60}m`

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="font-bold text-gray-600 text-xl">{operator.name.charAt(0)}</span>
            </div>
            <div>
              <CardTitle className="text-2xl">{operator.name}</CardTitle>
              <div className="flex items-center gap-3 mt-1">
                <Badge variant="secondary">{schedule.bus_type}</Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span>⭐</span>
                  <span>{operator.rating}</span>
                </div>
                <span className="text-sm text-gray-600">{schedule.seats_available} seats available</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Journey Timeline */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Journey Details</h3>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{departTime}</div>
              <div className="text-sm text-gray-600 mt-1">{schedule.stops[0]}</div>
              <div className="text-xs text-gray-500">
                {new Date(schedule.depart_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>

            <div className="flex-1 flex items-center gap-3">
              <div className="h-px bg-gray-300 flex-1"></div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-600">{duration}</div>
                <div className="text-xs text-gray-500">Direct</div>
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{arriveTime}</div>
              <div className="text-sm text-gray-600 mt-1">{schedule.stops[schedule.stops.length - 1]}</div>
              <div className="text-xs text-gray-500">
                {new Date(schedule.arrive_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bus Features */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Bus Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Air Conditioning</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Reclining Seats</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>WiFi Available</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>USB Charging</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Entertainment</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Refreshments</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Rest Stops</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-600">✓</span>
              <span>Safety Certified</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
