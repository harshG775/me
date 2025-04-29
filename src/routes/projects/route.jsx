import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router";

// Sample project data - replace with your actual projects
const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Personal portfolio website built with Next.js and Tailwind CSS",
        image: "/placeholder.svg?height=200&width=400",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/harshG775/portfolio",
        liveUrl: "https://harshg.dev",
        featured: true,
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "Full-stack e-commerce application with product management and payment integration",
        image: "/placeholder.svg?height=200&width=400",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/harshG775/ecommerce",
        liveUrl: "https://ecommerce-demo.harshg.dev",
        featured: true,
    },
    {
        id: 3,
        title: "Task Management App",
        description: "A productivity application for managing tasks and projects",
        image: "/placeholder.svg?height=200&width=400",
        tags: ["React", "Firebase", "Tailwind CSS"],
        githubUrl: "https://github.com/harshG775/task-manager",
        liveUrl: "https://tasks.harshg.dev",
        featured: false,
    },
];

export default function ProjectsRoute() {
    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <Card className="border-2">
            <CardHeader className="border-b bg-gradient-to-r from-background to-primary/30 p-6 ">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">Featured Projects</CardTitle>
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/projects" className="flex items-center gap-1">
                            View All <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
                <CardDescription>A selection of my recent work and personal projects</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <Card key={project.id} className="overflow-hidden border transition-all hover:shadow-md">
                            <div className="relative h-48 w-full overflow-hidden bg-muted">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardHeader className="p-4">
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <Badge key={tag} variant="secondary" className="font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <Badge variant="outline" className="font-normal">
                                            +{project.tags.length - 3} more
                                        </Badge>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between gap-2 border-t p-4">
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/projects/${project.id}`}>Details</Link>
                                </Button>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="icon" asChild>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View GitHub repository"
                                        >
                                            <Github className="h-4 w-4" />
                                        </a>
                                    </Button>
                                    <Button variant="outline" size="icon" asChild>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View live demo"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 p-4 text-center">
                <p className="mx-auto text-sm text-muted-foreground">
                    These are just a few examples of my work. Visit my{" "}
                    <Link href="/projects" className="font-medium underline underline-offset-4">
                        projects page
                    </Link>{" "}
                    to see more, or check my{" "}
                    <a
                        href="https://github.com/harshG775"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub profile
                    </a>{" "}
                    for all my repositories.
                </p>
            </CardFooter>
        </Card>
    );
}
