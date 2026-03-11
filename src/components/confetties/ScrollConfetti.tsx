"use client"

import { useEffect, useRef } from "react"
import confetti from "canvas-confetti"

export default function ScrollConfetti() {

    const ref = useRef<HTMLDivElement | null>(null)
    const triggered = useRef(false)

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                const entry = entries[0]

                if (entry.isIntersecting && !triggered.current) {

                    triggered.current = true

                    confetti({
                        particleCount: 240,
                        spread: 1400,
                        startVelocity: 30,
                        gravity: 0.9,
                        ticks: 200,
                        origin: { y: 0.3 }
                    })

                }

            },
            { threshold: 0.4 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()

    }, [])

    return <div ref={ref} className="absolute inset-0 pointer-events-none" />
}