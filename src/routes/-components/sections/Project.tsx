import { cn } from "@/lib/utils"
import { ExternalLink, Github, Globe, Package, FileText } from "lucide-react"

export interface Project {
    id: string
    title: string
    category: "Full-Stack" | "Frontend" | "Open Source" | "AI/ML"
    status: "Completed" | "In Progress" | "Maintained"
    associatedWith?: string
    thumbnail: string
    videoDemo?: string
    shortDescription: string
    longDescription: string
    metrics?: {
        label: string
        value: string
    }[]
    stack: {
        name: string
        category: "frontend" | "backend" | "devops" | "ai"
    }[]
    links: {
        type: "github" | "live" | "npm" | "case-study"
        url: string
    }[]
}

const projects: Project[] = []

const LinkIcon = ({ type }: { type: Project["links"][0]["type"] }) => {
    switch (type) {
        case "github":
            return <Github className="w-4 h-4" />
        case "live":
            return <Globe className="w-4 h-4" />
        case "npm":
            return <Package className="w-4 h-4" />
        case "case-study":
            return <FileText className="w-4 h-4" />
        default:
            return <ExternalLink className="w-4 h-4" />
    }
}

export default function ProjectSection({ ...props }: React.ComponentProps<"section">) {
    return (
        <section className={cn("max-w-6xl mx-auto px-3 py-12", props.className)} {...props}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Experience</h2>
            <div>{/*  */}</div>
        </section>
    )
}
