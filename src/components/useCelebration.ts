import type React from "react"
import { useCallback, useRef, useState, useEffect } from "react"

// Simple audio data for pop sound
const BASE64_POP = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YRAAAA=="

export function useCelebration() {
  const [visible, setVisible] = useState(false)
  const popRef = useRef<HTMLAudioElement | null>(null)
  const touchStartedRef = useRef(false)

  useEffect(() => {
    // Initialize audio
    popRef.current = new Audio(BASE64_POP)
    popRef.current.volume = 0.3

    // Unlock audio on first user interaction
    const unlock = () => {
      popRef.current?.play().catch(() => {})
      document.removeEventListener("touchstart", unlock)
      document.removeEventListener("click", unlock)
    }

    document.addEventListener("touchstart", unlock, { once: true })
    document.addEventListener("click", unlock, { once: true })

    return () => {
      document.removeEventListener("touchstart", unlock)
      document.removeEventListener("click", unlock)
    }
  }, [])

  const show = useCallback(() => {
    if (visible) return

    setVisible(true)

    // Play pop sound
    if (popRef.current) {
      popRef.current.currentTime = 0
      popRef.current.play().catch(() => {
        // Silently fail if audio can't play
      })
    }

    // Add haptic feedback on mobile
    if ("vibrate" in navigator) {
      navigator.vibrate([50, 100, 50])
    }
  }, [visible])

  const hide = useCallback(() => {
    setVisible(false)
  }, [])

  const onButtonTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    touchStartedRef.current = true
  }, [])

  const onButtonTouchEnd = useCallback(
      (e: React.TouchEvent) => {
        e.preventDefault()
        if (touchStartedRef.current) {
          show()
        }
        touchStartedRef.current = false
      },
      [show],
  )

  const onButtonClick = useCallback(() => {
    if (!touchStartedRef.current) {
      show()
    }
  }, [show])

  const onButtonKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          show()
        }
      },
      [show],
  )

  return {
    visible,
    show,
    hide,
    bindButton: {
      onTouchStart: onButtonTouchStart,
      onTouchEnd: onButtonTouchEnd,
      onClick: onButtonClick,
      onKeyDown: onButtonKeyDown,
      tabIndex: 0,
    } as const,
  }
}
