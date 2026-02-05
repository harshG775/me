import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Briefcase, Calendar, MapPin, ExternalLink, Globe } from "lucide-react"

export type Experience = {
    id: string
    title: string
    employmentType: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance"
    company: {
        name: string
        logo?: string
        url: string
        location: string
        workMode: "Remote" | "On-site" | "Hybrid"
    }
    startDate: string
    endDate?: string
    links: {
        label: string
        url: string
        type: "project" | "article" | "repo" | "demo"
    }[]
    description: string[]
    skills: {
        name: string
        category: "frontend" | "backend" | "tools" | "devops"
    }[]
}

export default function ExperienceSection({ ...props }: React.ComponentProps<"section">) {
    const formatDate = (dateStr?: string) => {
        if (!dateStr) return "Present"
        return new Date(dateStr).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
            timeZone: "UTC",
        })
    }

    const experiences: Experience[] = [
        {
            id: "prabhubhakti-lead",
            title: "Lead Frontend Engineer",
            employmentType: "Full-time",
            company: {
                name: "Prabhubhakti (Spiritual SaaS)",
                url: "http://prabhubhakti.io",
                location: "Gurugram",
                workMode: "On-site",
            },
            startDate: "2025-06-01",
            links: [
                { label: "prabhubhakti.io", url: "http://prabhubhakti.io", type: "project" },
                { label: "prabhubhakti.com", url: "http://prabhubhakti.com", type: "project" },
            ],
            description: [
                "Developed Prabhubhakti's entire landing and SaaS website from scratch using Next.js, Tailwind CSS, and Framer Motion, increasing SEO scores to 95+.",
                "Architected a multi-tenant SaaS platform with domain/subdomain routing and Razorpay integration.",
                "Launched 2 astrologer storefronts within 2 months, reducing onboarding time by 70%.",
                "Collaborated with backend, design, and DevOps teams to ensure production readiness.",
            ],
            skills: [
                { name: "Next.js", category: "frontend" },
                { name: "Tailwind CSS", category: "frontend" },
                { name: "Framer Motion", category: "frontend" },
                { name: "Razorpay", category: "tools" },
                { name: "Multi-Tenant", category: "backend" },
            ],
        },
        {
            id: "adda247-sde",
            title: "Frontend Engineer SDE",
            employmentType: "Full-time",
            company: {
                name: "Metis Eduventures (Adda247)",
                url: "https://adda247.com",
                location: "Gurugram",
                workMode: "On-site",
            },
            startDate: "2024-08-01",
            endDate: "2025-02-01",
            links: [{ label: "adda247.com", url: "https://adda247.com", type: "project" }],
            description: [
                "Built and optimized 5+ AI chatbot features using React.js and OpenAI APIs, automating 30% of customer support.",
                "Improved initial page load speed by 25% via bundle optimization and tree-shaking.",
                "Participated in sprint planning and QA cycles in an Agile environment.",
            ],
            skills: [
                { name: "React.js", category: "frontend" },
                { name: "Zustand", category: "frontend" },
                { name: "OpenAI", category: "tools" },
                { name: "Optimization", category: "tools" },
            ],
        },
        {
            id: "itaxeasy-frontend",
            title: "Frontend Engineer",
            employmentType: "Full-time",
            company: {
                name: "ItaxEasy",
                url: "https://itaxeasy.com",
                location: "Remote",
                workMode: "Remote",
            },
            startDate: "2023-10-01",
            endDate: "2024-05-01",
            links: [{ label: "itaxeasy.com", url: "https://itaxeasy.com", type: "project" }],
            description: [
                "Revamped UI of a legacy tax-filing platform, reducing bounce rates by 22%.",
                "Introduced route-based lazy loading, resulting in 18% faster TTI.",
            ],
            skills: [
                { name: "React.js", category: "frontend" },
                { name: "Tailwind CSS", category: "frontend" },
                { name: "Performance", category: "tools" },
            ],
        },
    ]

    return (
        <section className={cn("max-w-6xl mx-auto px-3 py-12", props.className)} {...props}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Experience</h2>

            <div className="relative">
                {/* Timeline Lines */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 via-muted-foreground/20 to-transparent -translate-x-1/2 hidden md:block" />
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20 md:hidden" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={cn(
                                "relative flex flex-col md:flex-row items-center",
                                index % 2 === 0 ? "md:flex-row-reverse" : "",
                            )}
                        >
                            {/* The Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)] -translate-x-1/2 z-10" />

                            <div
                                className={cn(
                                    "w-full md:w-[45%] pl-10 md:pl-0",
                                    index % 2 === 0 ? "md:pr-12" : "md:pl-12",
                                )}
                            >
                                <Card className="py-0 border-muted-foreground/10 hover:border-primary/50 transition-all bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md">
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-primary leading-tight">
                                                    {exp.title}
                                                </h3>
                                                <div className="flex items-center gap-1.5 text-muted-foreground mt-1">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span className="text-sm font-medium">{exp.company.name}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-1">
                                                <Badge
                                                    variant="outline"
                                                    className="font-mono text-xs whitespace-nowrap"
                                                >
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                                                </Badge>
                                                <Badge
                                                    variant="secondary"
                                                    className="text-[10px] uppercase tracking-wider"
                                                >
                                                    {exp.employmentType}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-4">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.company.location}
                                            </div>
                                            <div className="flex items-center gap-1 font-medium text-primary/80">
                                                <Globe className="w-4 h-4" />
                                                {exp.company.workMode}
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-6">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                                    <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-primary/60" />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {exp.skills.map((skill) => (
                                                <Badge
                                                    key={skill.name}
                                                    variant="secondary"
                                                    className={cn(
                                                        "text-[10px] px-2 py-0 border-transparent",
                                                        skill.category === "frontend" &&
                                                            "bg-blue-500/10 text-blue-500 border-blue-500/20",
                                                        skill.category === "backend" &&
                                                            "bg-green-500/10 text-green-500 border-green-500/20",
                                                        skill.category === "tools" &&
                                                            "bg-rose-500/10 text-rose-500 border-rose-500/20",
                                                    )}
                                                >
                                                    {skill.name}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 border-t pt-4">
                                            {exp.links.map((link, i) => (
                                                <a
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-primary hover:underline flex items-center gap-1 group"
                                                >
                                                    <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform" />
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="hidden md:block w-[45%]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
