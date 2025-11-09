"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Custom hook to trigger animations when elements enter the viewport
 * @param threshold - Percentage of element that must be visible to trigger (0-1)
 * @param triggerOnce - Whether to trigger animation only once or every time element enters viewport
 */
export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, triggerOnce])

  return { elementRef, isVisible }
}
