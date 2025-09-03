export interface Route {
  id: string
  origin: string
  destination: string
  distance_km: number
}

export interface Operator {
  id: string
  name: string
  rating: number
  logo: string
}

export interface Fare {
  class: "ECONOMY" | "VIP" | "LUXURY"
  currency: string
  amount: number
}

export interface Schedule {
  id: string
  operator_id: string
  route_id: string
  depart_at: string
  arrive_at: string
  duration_minutes: number
  bus_type: string
  stops: string[]
  fares: Fare[]
  seats_available: number
}

export interface CartItem {
  scheduleId: string
  schedule: Schedule
  operator: Operator
  fare: Fare
  quantity: number
}

export interface SearchParams {
  origin: string
  destination: string
  date: string
  passengers: string
}
