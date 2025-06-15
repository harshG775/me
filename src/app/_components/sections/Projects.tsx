import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects({ ...props }: React.ComponentProps<"section">) {
    // # https://www.taniarascia.com/projects/
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-stack e-commerce solution with modern design and seamless user experience. Features include product catalog, shopping cart, and secure payment processing.",
            technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            image: "/placeholder.svg?height=200&width=300",
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Task Management App",
            description:
                "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
            image: "/placeholder.svg?height=200&width=300",
            liveUrl: "#",
            githubUrl: "#",
        },
        {
            title: "Weather Dashboard",
            description:
                "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
            technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
            image: "/placeholder.svg?height=200&width=300",
            liveUrl: "#",
            githubUrl: "#",
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
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Live Demo
                                        </Button>
                                        <Button size="sm" variant="outline" className="flex-1">
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </Button>
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
