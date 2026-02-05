import { createFileRoute } from "@tanstack/react-router"
import ContactSection from "../-components/sections/contact"

export const Route = createFileRoute("/contact/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main>
            <div className="min-h-[80dvh] py-24">
                <ContactSection />
            </div>
        </main>
    )
}
