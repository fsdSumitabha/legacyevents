type PortfolioItem = {
    id: string;
    type: "image" | "video";
    category: "Weddings" | "Rice Ceremony" | "Birthdays" | "Corporate";
    src: string;
    title: string;
    location: string;
    year: number;
};

const portfolioItems: PortfolioItem[] = [
    { id: "1", type: "image", category: "Weddings", src: "/portfolio/event-1.jpg", title: "Royal Birthday Celebration", location: "Alipore Kolkata", year: 2023 },
    { id: "2", type: "video", category: "Rice Ceremony", src: "/portfolio/event-film.mp4", title: "Luxury Rice Ceremony", location: "Ruby, Kolkata", year: 2024 },
    { id: "3", type: "image", category: "Rice Ceremony", src: "/portfolio/event-2.jpg", title: "Destination Rice Ceremony", location: "New Town, Kolkata", year: 2024 },
    { id: "4", type: "image", category: "Corporate", src: "/portfolio/event-3.jpg", title: "Corporate Gala Night", location: "Ballygung, Kolkata", year: 2023 },
    { id: "5", type: "image", category: "Weddings", src: "/portfolio/event-4.jpg", title: "Royal Birthday Celebration", location: "Salt Lake, Kolkata", year: 2024 },
    { id: "6", type: "video", category: "Corporate", src: "/portfolio/event-film-2.mp4", title: "Luxury Corporate Reunion", location: "Joka, Kolkata", year: 2023 },
    { id: "7", type: "image", category: "Birthdays", src: "/portfolio/event-5.jpg", title: "Destination Birthday", location: "Behala, Kolkata", year: 2025 },
    { id: "8", type: "image", category: "Corporate", src: "/portfolio/event-6.jpg", title: "Corporate Gala Night", location: "Park Street, Kolkata", year: 2026 }
];

export default portfolioItems;