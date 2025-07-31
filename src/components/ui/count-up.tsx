"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CountUp({ end, duration = 2000, suffix = "", prefix = "", className = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  // Use both framer-motion and Intersection Observer for better reliability
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px"
  })

  const startAnimation = () => {
    if (hasAnimated) return
    
    setHasAnimated(true)
    let startTime: number | null = null
    let animationFrame: number | null = null

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }

  // Use Intersection Observer as primary method
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation()
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated, end, duration])

  // Fallback with framer-motion
  useEffect(() => {
    if (isInView && !hasAnimated) {
      startAnimation()
    }
  }, [isInView, hasAnimated, end, duration])

  // Final fallback: if the component doesn't come into view after a delay, start the animation anyway
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hasAnimated) {
        startAnimation()
      }
    }, 3000) // Start animation after 3 seconds if not triggered by scroll

    return () => clearTimeout(timeout)
  }, [hasAnimated, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
