import { useEffect, useRef, useState } from "react"

/**
 * Fades a section in once, the first time 20% of it enters the viewport.
 * Skips straight to visible when the user prefers reduced motion, or when
 * IntersectionObserver isn't available (SSR).
 */
export const useRevealOnScroll = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}
