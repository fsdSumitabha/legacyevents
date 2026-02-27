"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ourApproach } from "@/data/OurApproach"

export default function OurApproach() {
    const [offsetY, setOffsetY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY * 0.08)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section className="relative py-28 bg-rose-50 dark:bg-stone-950">

            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div className="max-w-lg">

                        <h2 className="text-3xl md:text-5xl font-serif leading-tight text-stone-800 dark:text-stone-100 whitespace-pre-line">
                            {ourApproach.heading}
                        </h2>

                        <div className="mt-10 space-y-6 text-stone-600 dark:text-stone-400">
                            {ourApproach.paragraphs.map((paragraph, index) => (
                                <p key={index}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="relative w-64 h-72 mx-auto -top-64 ">
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-rose-300/30 will-change-transform"
                            style={{
                                transform: `translateY(${offsetY}px)`
                            }}
                        >
                            <Image
                                src={ourApproach.image}
                                alt="Event design atmosphere with floral and ambient lighting"
                                width={200}
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}