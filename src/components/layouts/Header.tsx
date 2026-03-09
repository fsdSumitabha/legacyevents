"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            {/* Main Header */}
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
                    scrolled
                        ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-stone-950/90"
                        : "bg-transparent"
                }`}
            >
                <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
                    scrolled ? "py-4" : "py-6"
                }`}>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-serif text-2xl text-stone-800 dark:text-stone-100"
                    >
                        Legacy Events
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden gap-10 text-sm uppercase tracking-[0.15em] md:flex">
                        <Link href="/" className="text-stone-700 transition hover:text-rose-500 dark:text-stone-200">
                            Home
                        </Link>
                        <Link href="/portfolio" className="text-stone-700 transition hover:text-rose-500 dark:text-stone-200">
                            Portfolio
                        </Link>
                        <Link href="/services" className="text-stone-700 transition hover:text-rose-500 dark:text-stone-200">
                            Services
                        </Link>
                        <Link href="/contact-us" className="text-stone-700 transition hover:text-rose-500 dark:text-stone-200">
                            Contact
                        </Link>
                    </nav>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="flex flex-col gap-1 md:hidden"
                        aria-label="Open Menu"
                    >
                        <span className="h-px w-6 bg-stone-800 dark:bg-stone-100" />
                        <span className="h-px w-6 bg-stone-800 dark:bg-stone-100" />
                        <span className="h-px w-6 bg-stone-800 dark:bg-stone-100" />
                    </button>
                </div>
            </header>

            {/* Mobile Slide Menu */}
            <div
                className={`fixed inset-0 z-50 transition ${
                    open ? "visible" : "invisible"
                }`}
            >
                {/* Overlay */}
                <div
                    onClick={() => setOpen(false)}
                    className={`absolute inset-0 bg-stone-950/50 transition-opacity duration-500 ${
                        open ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white p-10 shadow-xl transition-transform duration-500 dark:bg-stone-950 ${
                        open ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <button
                        onClick={() => setOpen(false)}
                        className="mb-12 text-sm uppercase tracking-wider text-rose-400"
                    >
                        Close
                    </button>

                    <nav className="flex flex-col gap-8 text-lg font-serif text-stone-800 dark:text-stone-100">
                        <Link href="/" onClick={() => setOpen(false)}>
                            Home
                        </Link>
                        <Link href="/portfolio" onClick={() => setOpen(false)}>
                            Portfolio
                        </Link>
                        <Link href="/services" onClick={() => setOpen(false)}>
                            Services
                        </Link>
                        <Link href="/contact-us" onClick={() => setOpen(false)}>
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}