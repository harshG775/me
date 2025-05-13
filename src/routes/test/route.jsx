import { cn } from "@/lib/utils";
import { Contact } from "lucide-react";
import { FlameKindling } from "lucide-react";
import { Github, Mail, Linkedin, FileText, User, Code, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function TestRoute() {
    return (
        <div className="min-h-screen bg-muted p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid-container">
                    <IntroSection className="intro" />
                    <AboutMeSection className="about" />
                    <SkillsSection className="skills" />
                    <ProjectsSection className="projects" />
                    <ContactSection className="contact" />
                    <SocialLinksSection className="social" />
                </div>
            </div>
        </div>
    );
}

function IntroSection({ ...props }) {
    return (
        <div className={cn("bg-background rounded-2xl shadow-md p-6 flex flex-col justify-center", props?.className)}>
            <div className="flex items-center">
                <FlameKindling className="w-5 h-5 mr-2 text-secondary-foreground" />
                <h1 className="text-3xl md:text-4xl font-bold mb-2">John Doe</h1>
            </div>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-4">Full Stack Developer</h2>
            <p className="text-gray-600">Building beautiful, functional web experiences</p>
        </div>
    );
}
function AboutMeSection({ ...props }) {
    return (
        <div className={cn("bg-background rounded-2xl shadow-md p-6 flex flex-col justify-center", props?.className)}>
            <div className="flex items-center mb-4">
                <User className="w-5 h-5 mr-2 text-secondary-foreground" />
                <h3 className="text-xl font-semibold">About Me</h3>
            </div>
            <p className="text-gray-600">
                Passionate developer with 5+ years of experience creating web applications that combine functionality
                with stunning design.
            </p>
        </div>
    );
}
function SkillsSection({ ...props }) {
    return (
        <div className={cn("bg-background rounded-2xl shadow-md p-6", props?.className)}>
            <div className="flex items-center mb-4">
                <Code className="w-5 h-5 mr-2 text-secondary-foreground" />
                <h3 className="text-xl font-semibold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
function ProjectsSection({ ...props }) {
    return (
        <div className={cn("rounded-2xl shadow-md overflow-hidden", props?.className)}>
            <Link href="/projects" className="project-card block h-full">
                <div className="relative h-full w-full min-h-[300px]">
                    <img
                        src={`/placeholder.svg?height=600&width=800`}
                        alt="My Projects"
                        fill
                        className="object-cover project-image"
                    />
                    <div className="project-content">
                        <div className="flex items-center mb-2">
                            <Briefcase className="w-6 h-6 mr-2 text-white" />
                            <h3 className="text-3xl font-bold text-white">My Projects</h3>
                        </div>
                        <p className="text-gray-200 text-lg max-w-lg mb-2">
                            Explore my portfolio of web applications, design work, and development projects
                        </p>
                        <div className="flex items-center text-white font-medium">
                            <span>View all projects</span>
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
function ContactSection({ ...props }) {
    return (
        <div className={cn("bg-background rounded-2xl shadow-md p-6", props?.className)}>
            <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 mr-2 text-secondary-foreground" />
                <h3 className="text-xl font-semibold">Contact</h3>
            </div>
            <p className="text-gray-600 mb-3">Get in touch for collaborations or opportunities</p>
            <a
                href="mailto:hello@example.com"
                className="inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
                Say Hello
            </a>
        </div>
    );
}
function SocialLinksSection({ ...props }) {
    return (
        <div className={cn("bg-background rounded-2xl shadow-md p-6", props?.className)}>
            <div className="flex items-center mb-4">
                <Contact className="w-5 h-5 mr-2 text-secondary-foreground" />
                <h3 className="text-xl font-semibold">Contact</h3>
            </div>{" "}
            <div className="flex gap-4">
                <a href="#" className="p-2 bg-primary/40 hover:bg-primary rounded-full transition-colors">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="p-2 bg-primary/40 hover:bg-primary rounded-full transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="p-2 bg-primary/40 hover:bg-primary rounded-full transition-colors">
                    <FileText className="w-5 h-5" />
                    <span className="sr-only">Resume</span>
                </a>
            </div>
        </div>
    );
}
