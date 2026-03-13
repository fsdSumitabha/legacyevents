"use client"

import { useEffect, useState, useRef } from "react"
import { handwriting } from "@/lib/fonts"

type Props = {
    text: string
}

export default function Signature({ text }: Props) {
    const [displayed, setDisplayed] = useState("")
    const [done, setDone] = useState(false)
    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true)
                    observer.disconnect() // trigger only once
                }
            },
            { threshold: 0.2 } // adjust sensitivity
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!visible) return

        let index = 0
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, index + 1))
            index++

            if (index === text.length) {
                clearInterval(interval)
                setDone(true)
            }
        }, 60)

        return () => clearInterval(interval)
    }, [visible, text])

    return (
        <div ref={ref} className="w-full flex justify-end">
            <p
                className={`${handwriting.className} text-xl sm:text-2xl md:text-3xl text-stone-700 dark:text-stone-200 whitespace-nowrap`}
                style={{ minWidth: `${text.length}ch` }}
            >
                {displayed}
                {!done && visible && <span className="animate-pulse">|</span>}
            </p>
        </div>
    )
}