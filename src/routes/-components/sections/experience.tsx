import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function ExperienceSection({ ...props }: React.ComponentProps<"section">) {
    const experiences = [
        {
            title: "Lead Frontend Developer",
            company: "Prabhubhakti (Spiritual SaaS Platform)",
            period: "Jun 2025 - Present",
            location: "Gurugram",
            links: ["http://prabhubhakti.io", "http://prabhubhakti.com"],
            description: [
                "Developed Prabhubhakti's entire landing and SaaS website from scratch using Next.js, Tailwind CSS, and Framer Motion, increasing SEO scores to 95+ and organic traffic by 40% in the first month.",
                "Architected a multi-tenant SaaS platform with domain/subdomain routing, wallet-based credit system, and Razorpay integration for session bookings.",
                "Launched 2 astrologer storefronts (astrodrpc.com, divinetwinsoul.com) within 2 months, reducing onboarding time by 70%.",
                "Collaborated with backend, design, and DevOps teams to ensure seamless integration and production readiness.",
            ],
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Razorpay", "Multi-Tenant", "Domain Routing"],
        },
        {
            title: "Freelance Frontend Developer",
            company: "Kalpi Capital",
            period: "May 2025 - jun 2025",
            location: "Freelance",
            links: ["https://kalpicapital.com"],
            description: [
                "Delivered a full-featured, SEO-first landing page from scratch using Next.js, ShadCN, Tailwind CSS, and @next/third-parties.",
                "Boosted Lighthouse SEO score from 68 to 97 and significantly improved Core Web Vitals.",
            ],
            technologies: ["Next.js", "Tailwind CSS", "ShadCN", "Core Web Vitals", "SEO"],
        },
        {
            title: "Frontend Developer SDE",
            company: "Metis Eduventures Pvt. Ltd (Adda247)",
            period: "Aug 2024 - Feb 2025",
            location: "Gurugram",
            links: ["https://adda247.com"],
            description: [
                "Built and optimized 5+ AI chatbot features using React.js, Zustand, and OpenAI APIs, automating over 30% of repetitive customer support interactions.",
                "Improved initial page load speed by 25% by optimizing bundle size, implementing lazy loading, and tree-shaking.",
                "Participated in sprint planning, pull requests, and QA cycles in an Agile environment.",
            ],
            technologies: ["React.js", "Zustand", "OpenAI", "Bundle Optimization", "Agile"],
        },
        {
            title: "Frontend Developer",
            company: "ItaxEasy",
            period: "Oct 2023 - May 2024",
            location: "Remote",
            links: ["https://itaxeasy.com"],
            description: [
                "Revamped UI of a legacy tax-filing platform using React.js and Tailwind CSS, reducing bounce rates by 22% and improving session time by 17%.",
                "Introduced route-based lazy loading, resulting in 18% faster time-to-interactive.",
            ],
            technologies: ["React.js", "Tailwind CSS", "Performance", "Lazy Loading"],
        },
    ]

    return (
        <section className={cn("max-w-6xl mx-auto px-3", props.className)} {...props}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Experience</h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
                        >
                            <CardContent className="p-6 space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                                        <p className="text-primary font-medium">
                                            {exp.company}
                                            {exp.location ? ` • ${exp.location}` : ""}
                                        </p>
                                    </div>
                                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                                        {exp.period}
                                    </Badge>
                                </div>

                                <ul className="pl-4 list-disc text-muted-foreground space-y-1">
                                    {exp.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
