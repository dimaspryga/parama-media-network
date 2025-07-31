"use client"

import { useQuery } from "@tanstack/react-query"

interface Event {
  id: number
  title: string
  description: string
  date: string
  location: string
  category: string
  image: string
}

// Mock API function
const fetchEvents = async (): Promise<Event[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: 1,
      title: "Tech Summit 2024",
      description: "A large-scale technology conference",
      date: "2024-03-15",
      location: "Yogyakarta Convention Center",
      category: "Corporate",
      image: "/placeholder.svg?height=300&width=400",
    },
    // Add more mock events as needed
  ]
}

export function useEventData() {
  return useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}
