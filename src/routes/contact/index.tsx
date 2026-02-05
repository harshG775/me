import { createFileRoute } from "@tanstack/react-router"
import ContactSection from "../-components/sections/contact"
import { Footer } from "../-components/footer/index.tsx"

export const Route = createFileRoute("/contact/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main>
            <div className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6">
                <div className="h-24"></div>
                <ContactSection />
            </div>
            <Footer />
        </main>
    )
}
