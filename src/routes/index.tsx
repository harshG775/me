import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowUpRight, Contact2, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "./-components/footer/index.tsx"
import ContactSection from "./-components/sections/contact.tsx"
import ExperienceSection from "./-components/sections/experience.tsx"
import ProjectSection from "./-components/sections/Project.tsx"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex-1">
            <div className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6">
                <div className="h-24"></div>
                <section className="relative z-10 max-w-4xl text-center">
                    <Badge asChild className="rounded-full border-border py-1" variant="secondary">
                        <Link to="/contact">
                            Available for Freelance <ArrowUpRight className="ml-1 size-4" />
                        </Link>
                    </Badge>
                    <h1 className="mt-6 font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
                        Hello, I'm Harsh. I'm a Frontend softwere developer.
                    </h1>
                    <p className="mt-6 text-foreground/80 md:text-lg">
                        I'm a passionate web developer crafting beautiful, functional experiences that bring ideas to
                        life through code.
                    </p>
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <Button className="rounded-full text-base" size="lg">
                            Download CV
                            <FileText className="h-5! w-5!" />
                        </Button>
                        <Button asChild className="rounded-full text-base shadow-none" size="lg" variant="outline">
                            <Link to="/contact">
                                <Contact2 className="h-5! w-5!" /> Contact Me
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
            <div className="mt-16 lg:mt-16 relative py-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                    <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                </div>
                <section>{/*  */}</section>
            </div>
            <div className="mt-16 lg:mt-16 relative py-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                    <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                </div>
                <ExperienceSection />
            </div>
            <div className="mt-16 lg:mt-16 relative py-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                    <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                </div>
                <ProjectSection />
            </div>
            <div className="mt-16 lg:mt-16 relative py-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                    <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                </div>
                <ContactSection />
            </div>
            <Footer />
        </main>
    )
}
