import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Schedule, Operator } from "@/types"

interface ScheduleCardProps {
  schedule: Schedule
  operator?: Operator
}

export function ScheduleCard({ schedule, operator }: ScheduleCardProps) {
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
  const minFare = Math.min(...schedule.fares.map((f) => f.amount))

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Operator & Route Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-600">{operator?.name.charAt(0) || "B"}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{operator?.name || "Bus Operator"}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{schedule.bus_type}</Badge>
                  {operator?.rating && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span>⭐</span>
                      <span>{operator.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Time & Duration */}
            <div className="flex items-center gap-4 text-lg">
              <div className="text-center">
                <div className="font-bold">{departTime}</div>
                <div className="text-sm text-gray-600">{schedule.stops[0]}</div>
              </div>

              <div className="flex-1 flex items-center gap-2">
                <div className="h-px bg-gray-300 flex-1"></div>
                <div className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">{duration}</div>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <div className="text-center">
                <div className="font-bold">{arriveTime}</div>
                <div className="text-sm text-gray-600">{schedule.stops[schedule.stops.length - 1]}</div>
              </div>
            </div>

            {/* Stops */}
            <div className="mt-3 text-sm text-gray-600">
              <span className="font-medium">Stops:</span> {schedule.stops.join(" → ")}
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex flex-col items-end gap-3 md:min-w-[200px]">
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">KES {minFare.toLocaleString()}</div>
              <div className="text-sm text-gray-600">from</div>
              <div className="text-sm text-gray-600">{schedule.seats_available} seats left</div>
            </div>

            <Link href={`/details/${schedule.id}`}>
              <Button className="w-full md:w-auto">View Details</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
