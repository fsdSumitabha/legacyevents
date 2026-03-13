"use client"

import { motion } from "framer-motion"

type Props = {
    text: string
    className?: string
}

export default function AnimatedQuote({ text, className }: Props) {

    const words = text.split(" ")

    return (
        <p className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 0.6,
                        delay: i * 0.06
                    }}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </p>
    )
}