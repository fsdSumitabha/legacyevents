import ContactForm from "@/components/sections/ContactForm"
import FinalCTASection from "@/components/sections/FinalSectionCTA"
import LocationMap from "@/components/sections/LocationMap"


export default function contactPage() {
    return (
        <main>
            <ContactForm />
            <LocationMap />
            <FinalCTASection />
        </main>
    )
}