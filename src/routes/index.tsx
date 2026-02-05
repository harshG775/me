import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowUpRight, Contact2, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "./-components/header/index"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex-1">
                <div className="relative flex min-h-[80dvh] items-center justify-center overflow-hidden px-6">
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
                            I'm a passionate web developer crafting beautiful, functional experiences that bring ideas
                            to life through code.
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
                <div>
                    <section>{/*  */}</section>
                </div>
            </main>
        </div>
    )
}
