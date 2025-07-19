import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ ...props }: React.ComponentProps<"section">) {
    // # https://www.taniarascia.com/projects/

    const projects = [
        {
            title: "Prabhubhakti SaaS Platform",
            description:
                "Multi-tenant spiritual SaaS with domain routing, wallet-based credits, and Razorpay session bookings. Launched 2 storefronts in 2 months.",
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Razorpay", "Domain Routing"],
            image: "/projects/prabhubhakti.png",
            liveUrl: "https://prabhubhakti.io",
            githubUrl: "", // Not open-source
        },
        {
            title: "Kalpi Capital Landing Page",
            description:
                "Full-featured SEO-first landing page for fintech firm built using ShadCN, Tailwind, and Next.js. Boosted SEO score from 68 to 97.",
            technologies: ["Next.js", "Tailwind CSS", "ShadCN", "@next/third-parties"],
            image: "/projects/kalpicapital.png",
            liveUrl: "https://kalpicapital.com",
            githubUrl: "", // Client work
        },
        {
            title: "SupportDesk - AI-Powered Customer Support Tool",
            description:
                "An internal AI-assisted dashboard that replaced a third-party tool, saving ₹2L+/year and enabling 30% automation in support using OpenAI.",
            technologies: ["React.js", "Zustand", "Flask", "OpenAI API", "WebSockets"],
            image: "/projects/supportdesk.png",
            liveUrl: "https://supportdesk.adda247.com/",
            githubUrl: "", // Internal project; no public repo
        },
        {
            title: "AiDoubtSolver - EdTech Voice Chatbot",
            description:
                "Real-time chatbot supporting voice input/output using Whisper and Markdown rendering, used by 150+ students with >99.9% uptime.",
            technologies: ["React.js", "SSE", "Whisper API", "Markdown"],
            image: "/projects/aidoubtsolver.png",
            liveUrl: "https://aidoubtsolverdev.adda247.com/?session_id=4956daa3-cb49-4eec-a337-a088d37b7cd0",
            githubUrl: "", // Internal project
        },
        {
            title: "ItaxEasy UI Revamp",
            description:
                "Modernized UI for legacy tax platform, reducing bounce rate by 22% and improving session time with lazy loading and performance upgrades.",
            technologies: ["React.js", "Tailwind CSS", "Lazy Loading"],
            image: "/projects/itaxeasy.png",
            liveUrl: "https://itaxeasy.com",
            githubUrl: "", // Client work
        },
    ];

    return (
        <section {...props} className="py-20 relative">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-32 right-20 w-28 h-28 bg-chart-4/20 organic-shape-2 animate-pulse-soft"></div>
                <div className="absolute bottom-40 left-10 w-40 h-40 bg-primary/10 organic-shape animate-float"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Featured Projects</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
                            >
                                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">{project.title}</CardTitle>
                                </CardHeader>

                                <CardContent className="flex flex-col gap-4 flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-2 pt-2 mt-auto">
                                        {project.liveUrl && (
                                            <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90">
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                        {project.githubUrl && (
                                            <Button asChild size="sm" variant="outline" className="w-full">
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1"
                                                >
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
