import type { Schedule, Route, Operator } from "@/types"

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getSchedules(params: {
  origin?: string
  destination?: string
  date?: string
}): Promise<Schedule[]> {
  await delay(800) // Simulate network delay

  const response = await fetch("/data/schedules.json")
  const schedules: Schedule[] = await response.json()

  // Filter based on search params
  return schedules.filter((schedule) => {
    if (params.origin && !schedule.stops[0]?.toLowerCase().includes(params.origin.toLowerCase())) {
      return false
    }
    if (
      params.destination &&
      !schedule.stops[schedule.stops.length - 1]?.toLowerCase().includes(params.destination.toLowerCase())
    ) {
      return false
    }
    // For now, we'll ignore date filtering since we're using dummy data
    return true
  })
}

export async function getRoutes(): Promise<Route[]> {
  await delay(300)
  const response = await fetch("/data/routes.json")
  return response.json()
}

export async function getOperators(): Promise<Operator[]> {
  await delay(300)
  const response = await fetch("/data/operators.json")
  return response.json()
}

export async function getScheduleById(id: string): Promise<Schedule | null> {
  const schedules = await getSchedules({})
  return schedules.find((s) => s.id === id) || null
}
