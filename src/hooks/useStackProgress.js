import { useEffect, useRef, useState } from 'react'

export function useStackProgress(count) {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const frame = useRef(null)

  useEffect(() => {
    function measure() {
      const el = containerRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) {
        setProgress(0)
        return
      }

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable)
      setProgress((scrolled / scrollable) * (count - 1))
    }

    function onScroll() {
      if (frame.current) return
      frame.current = requestAnimationFrame(() => {
        frame.current = null
        measure()
      })
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [count])

  return [containerRef, progress]
}
