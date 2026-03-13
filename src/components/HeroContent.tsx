"use client"

import { motion, AnimatePresence, easeOut } from "framer-motion"

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: easeOut },
    },
    exit: {
        opacity: 0,
        y: -80, // stronger upward motion
        transition: { duration: 0.6, ease: easeOut },
    },
}

export default function HeroContent() {
    return (
        <AnimatePresence>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                exit="exit"
                viewport={{ once: false, amount: 0.1 }} // more sensitive
                className="max-w-xl text-right"
            >
                <motion.span
                    variants={item}
                    className="mb-4 block text-sm uppercase tracking-[0.3em] text-rose-500 dark:text-rose-400"
                >
                    Crafting Timeless Celebrations
                </motion.span>

                <motion.h1
                    variants={item}
                    className="mb-6 font-serif text-5xl leading-tight text-stone-800 dark:text-stone-100 md:text-6xl"
                >
                    Where Every Moment
                    <br />
                    Becomes a Memory
                </motion.h1>

                <motion.p
                    variants={item}
                    className="mb-8 text-stone-600 dark:text-stone-400"
                >
                    Weddings, rice ceremonies, birthdays — beautifully designed and thoughtfully executed.
                </motion.p>

                <motion.div
                    variants={item}
                    className="flex justify-end gap-4"
                >
                    <button className="rounded-2xl bg-rose-400 px-6 py-3 text-white transition hover:bg-rose-500">
                        Plan Your Event
                    </button>

                    <button className="rounded-2xl border border-rose-300 px-6 py-3 text-stone-700 hover:bg-rose-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800">
                        View Portfolio
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}