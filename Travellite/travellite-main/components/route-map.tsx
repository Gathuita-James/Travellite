import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RouteMapProps {
  stops: string[]
}

export function RouteMap({ stops }: RouteMapProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Route & Stops</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Static Route Visualization */}
          <div className="relative">
            <div className="flex items-center justify-between">
              {stops.map((stop, index) => (
                <div key={stop} className="flex flex-col items-center relative">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      index === 0 || index === stops.length - 1
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-gray-400"
                    }`}
                  ></div>
                  <div className="text-sm font-medium mt-2 text-center max-w-20">{stop}</div>
                  {index === 0 && <div className="text-xs text-green-600 mt-1">Start</div>}
                  {index === stops.length - 1 && <div className="text-xs text-red-600 mt-1">End</div>}
                </div>
              ))}
            </div>
            {/* Connecting Line */}
            <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-300 -z-10"></div>
          </div>

          {/* Stop Details */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium mb-2">Stop Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {stops.map((stop, index) => (
                <div key={stop} className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <span>{stop}</span>
                  {index === 0 && <span className="text-green-600 text-xs">(Departure)</span>}
                  {index === stops.length - 1 && <span className="text-red-600 text-xs">(Arrival)</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
