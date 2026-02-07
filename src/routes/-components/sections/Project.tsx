import { ArrowRight, ExternalLink, FileText, Github, Globe, MapPin, Package } from "lucide-react"
import { cn } from "@/lib/utils"

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
    metrics?: Array<{
        label: string
        value: string
    }>
    stack: Array<{
        name: string
        category: "frontend" | "backend" | "devops" | "ai"
    }>
    links: Array<{
        type: "github" | "live" | "npm" | "case-study"
        url: string
    }>
}

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

export interface Project {
    id: string
    title: string
    category: "Full-Stack" | "Frontend" | "Open Source" | "AI/ML"
    status: "Completed" | "In Progress" | "Maintained"
    // Updated structure
    company?: {
        name: string
        url: string
        location?: string
        workMode?: string
    }
    thumbnail: string
    videoDemo?: string
    shortDescription: string
    longDescription: string
    metrics?: Array<{
        label: string
        value: string
    }>
    stack: Array<{
        name: string
        category: "frontend" | "backend" | "devops" | "ai"
    }>
    links: Array<{
        type: "github" | "live" | "npm" | "case-study"
        url: string
    }>
}

const ProjectCard = ({ project }: { project: Project }) => {
    const companyLogo = project.company?.url
        ? `https://www.google.com/s2/favicons?domain=${new URL(project.company.url).hostname}&sz=64`
        : null

    return (
        <div className="group relative flex flex-col h-full bg-card border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50">
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-background/80 backdrop-blur-md border rounded">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col grow p-5">
                {/* Company Detailed Header */}
                {project.company && (
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            {companyLogo && <img src={companyLogo} alt="" className="w-5 h-5 rounded-sm" />}
                            <span className="text-primary text-[11px] font-bold uppercase tracking-tight">
                                {project.company.name}
                            </span>
                        </div>
                        {project.company.location && (
                            <div className="flex items-center gap-1 text-muted-foreground text-[10px]">
                                <MapPin className="w-3 h-3" />
                                {project.company.location}
                            </div>
                        )}
                    </div>
                )}

                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{project.shortDescription}</p>

                {/* Metrics & Stack sections remain the same... */}
                {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 mb-4 bg-muted/50 p-2 rounded-lg">
                        {project.metrics.map((metric, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-[10px] uppercase text-muted-foreground">{metric.label}</span>
                                <span className="text-xs font-bold">{metric.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.slice(0, 4).map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-0.5 text-[11px] bg-secondary text-secondary-foreground rounded-full border border-border"
                        >
                            {tech.name}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t">
                    {project.links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            <LinkIcon type={link.type} />
                            <span className="capitalize">{link.type}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default function ProjectSection({ className, projects }: { className?: string; projects: Array<Project> }) {
    const featuredProjects = projects.slice(0, 3)

    return (
        <section className={cn("py-24 px-6 max-w-7xl mx-auto", className)}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">My projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}
