import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Link } from "react-router";

export default function ProjectsPage() {
    const workProjects = [
        {
            id: 4,
            title: "Support Desk App",
            description: "Customer support platform with real-time messaging",
            image: "/projects/support-desk.png",
            tags: ["React", "zustand state management", "Tailwind"],
            liveUrl: "https://supportdesk.adda247.com/",
        },
        {
            id: 5,
            title: "Ai Doubt Solver",
            description: "AI-powered chatbot for solving doubts for students",
            image: "/projects/ai-doubt-solver.png",
            tags: ["React", "python", "Flask", "openai"],
            liveUrl: "https://aidoubtsolverdev.adda247.com/?session_id=4956daa3-cb49-4eec-a337-a088d37b7cd0",
        },
        {
            id: 6,
            title: "ItaxEasy",
            description:
                "A digitally authenticated pan card linked with aadhaar e-kyc in e-format issued by the income tax department to ease the financial transaction of taxpayers",
            image: "/projects/itax-easy.png",
            tags: ["React", "Next.js", "Tailwind"],
            liveUrl: "https://itaxeasy.app",
        },
    ];
    const personalProjects = [
        {
            id: 1,
            title: "OnyxStream",
            description: "Live streaming platform built with React and Next.js",
            image: "/projects/onyxstream.png",
            tags: ["React", "Next.js", "REST API", "Tailwind CSS"],
            liveUrl: "https://onyxstream.vercel.app/",
            githubUrl: "https://github.com/harshG775/onyx-stream",
        },
        {
            id: 2,
            title: "Travel Blog",
            description: "Content-focused blog with dynamic content loading",
            image: "/placeholder.svg?height=300&width=400",
            tags: ["Next.js", "Contentful", "Vercel"],
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather data visualization with charts",
            image: "/placeholder.svg?height=300&width=400",
            tags: ["React", "Chart.js", "API Integration"],
        },
    ];

    const renderProjectSection = (title, projects) => (
        <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-background rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="relative h-48">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <div className="flex gap-2 mb-2">
                                    {project.githubUrl && (
                                        <Button variant="outline" size="icon" asChild>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="View GitHub repository"
                                                title="View GitHub repository"
                                            >
                                                <Github className="size-6" />
                                            </a>
                                        </Button>
                                    )}
                                    {project.liveUrl && (
                                        <Button variant="outline" size="icon" asChild>
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="View live demo"
                                                title="View live demo"
                                            >
                                                <ExternalLink className="size-6" />
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-sm">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-muted p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-muted-foreground  mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="flex items-center mb-6">
                        <Briefcase className="w-7 h-7 mr-3 muted-foreground" />
                        <h1 className="text-4xl font-bold text-foreground">My Projects</h1>
                    </div>

                    <p className="text-xl text-muted-foreground max-w-3xl">
                        A collection of my work spanning web development, design, and software engineering. Each project
                        represents a unique challenge and solution.
                    </p>
                </div>

                {renderProjectSection("Projects", [...workProjects, ...personalProjects])}
            </div>
        </div>
    );
}
