"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Operator } from "@/types"

interface FiltersState {
  operators: string[]
  timeWindow: string
  busType: string
  sortBy: string
}

interface ResultsFiltersProps {
  operators: Operator[]
  filters: FiltersState
  onFiltersChange: (filters: FiltersState) => void
}

export function ResultsFilters({ operators, filters, onFiltersChange }: ResultsFiltersProps) {
  const handleOperatorChange = (operatorId: string, checked: boolean) => {
    const newOperators = checked
      ? [...filters.operators, operatorId]
      : filters.operators.filter((id) => id !== operatorId)

    onFiltersChange({ ...filters, operators: newOperators })
  }

  const handleFilterChange = (key: keyof FiltersState, value: string) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  return (
    <div className="space-y-6">
      {/* Sort */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="departure">Departure Time</SelectItem>
              <SelectItem value="price">Price (Low to High)</SelectItem>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Operators */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Bus Operators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {operators.map((operator) => (
              <div key={operator.id} className="flex items-center space-x-2">
                <Checkbox
                  id={operator.id}
                  checked={filters.operators.includes(operator.id)}
                  onCheckedChange={(checked) => handleOperatorChange(operator.id, checked as boolean)}
                />
                <Label htmlFor={operator.id} className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span>{operator.name}</span>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span>⭐</span>
                      <span>{operator.rating}</span>
                    </div>
                  </div>
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Time Window */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Departure Time</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={filters.timeWindow} onValueChange={(value) => handleFilterChange("timeWindow", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Times</SelectItem>
              <SelectItem value="morning">Morning (6AM - 12PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12PM - 6PM)</SelectItem>
              <SelectItem value="evening">Evening (6PM - 12AM)</SelectItem>
              <SelectItem value="night">Night (12AM - 6AM)</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Bus Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Bus Type</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={filters.busType} onValueChange={(value) => handleFilterChange("busType", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  )
}
