type Service = {
    title: string
    description: string
    image: string
    href: string
}

const services: Service[] = [
    {
        title: "Luxury Weddings",
        description: "Bespoke ceremonies curated with artistry and emotion.",
        image: "/services/wedding.jpg",
        href: "/services/weddings"
    },
    {
        title: "Rice Ceremony",
        description: "Traditional celebrations designed with elegance and warmth.",
        image: "/services/rice.jpg",
        href: "/services/rice-ceremony"
    },
    {
        title: "Birthdays",
        description: "Personal milestones transformed into unforgettable experiences.",
        image: "/services/birthday.jpg",
        href: "/services/birthdays"
    },
    {
        title: "Corporate Events",
        description: "Refined professional gatherings executed with precision.",
        image: "/services/corporate.jpg",
        href: "/services/corporate"
    }
]

export default services