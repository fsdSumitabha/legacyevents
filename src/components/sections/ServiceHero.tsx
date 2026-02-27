"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ServiceHero() {
    const [offsetY, setOffsetY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY * 0.12)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-rose-50 dark:bg-stone-950">

            {/* Background Image */}
            <div
                className="absolute inset-0 will-change-transform"
                style={{ transform: `translateY(${offsetY}px)` }}
            >
                <Image
                    src="/services/services-hero.jpg"
                    alt="Luxury event setup with floral and candle decor"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* Light Mode Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50/40 to-rose-50/80 dark:hidden" />

            {/* Dark Mode Overlay */}
            <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-stone-950/40 via-stone-950/60 to-stone-950/85" />

            {/* Grain Texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay dark:mix-blend-soft-light"
                style={{
                    backgroundImage: "url('/textures/grain.png')",
                    backgroundSize: "cover"
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6">

                {/* Label */}
                <p className="text-stone-800 dark:text-stone-500 tracking-[0.25em] uppercase text-xs">
                    Our Services
                </p>

                {/* Heading */}
                <h1 className="mt-6 text-stone-800 dark:text-stone-100 text-4xl md:text-6xl font-serif leading-tight">
                    Experiences Designed With Intention
                </h1>

                {/* Paragraph */}
                <p className="text-stone-600 dark:text-stone-400 max-w-xl mx-auto mt-6">
                    From intimate ceremonies to grand celebrations, we design events that feel timeless, personal, and unforgettable.
                </p>

                {/* CTA */}
                <div className="mt-10">
                    <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        Plan Your Event
                    </button>
                </div>
            </div>
        </section>
    )
}