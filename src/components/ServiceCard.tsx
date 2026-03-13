"use client"

import { motion } from "framer-motion"

type Props = {
    title: string
    description: string
}

export default function ServiceCard({ title, description }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="rounded-3xl bg-white/70 p-8 backdrop-blur dark:bg-stone-900/60"
        >
            <h3 className="mb-3 font-serif text-2xl text-stone-800 dark:text-stone-100">
                {title}
            </h3>
            <p className="text-stone-600 dark:text-stone-400">{description}</p>
        </motion.div>
    )
}