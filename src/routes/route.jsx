import { Badge } from "@/components/ui/badge";
import { BentoGridContainer, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Contact } from "lucide-react";
import { Github, Mail, Linkedin, FileText, User, Code, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function RootRoute() {
    return (
        <main className="bg-background">
            <BentoGridContainer
                className="max-w-[96rem] mx-auto lg:min-h-dvh p-4"
                gap={4}
                initialTemplate={{
                    desktop: [
                        "intro intro projects projects",
                        "about about projects projects",
                        "skills skills social contact",
                        "skills skills footer footer",
                    ],
                    tablet: ["intro intro", "about skills", "projects projects", "contact social", "footer footer"],
                    mobile: ["intro", "about", "skills", "projects", "contact", "social", "footer"],
                }}
            >
                <IntroSection area="intro" />
                <AboutMeSection area="about" />
                <SkillsSection area="skills" />
                <ProjectsSection area="projects" />
                <ContactSection area="contact" />
                <SocialLinksSection area="social" />
                <FooterSection area="footer" />
            </BentoGridContainer>
        </main>
    );
}

function IntroSection({ ...props }) {
    return (
        <BentoGridItem area={props.area}>
            <div className="flex items-center">
                {/* <FlameKindling className="w-5 h-5 mr-2 text-primary" /> */}
                <h1 className="text-3xl md:text-3xl font-bold mb-2">Harsh G</h1>
            </div>
            <h2 className="text-xl md:text-xl text-muted-foreground mb-4">Full Stack Developer</h2>
            <p className="text-muted-foreground">Building beautiful, functional web experiences</p>
        </BentoGridItem>
    );
}
function AboutMeSection({ ...props }) {
    return (
        <BentoGridItem area={props.area}>
            <div className="flex items-center mb-4">
                <User className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-xl font-semibold">About Me</h3>
            </div>
            <p className="text-muted-foreground mt-2">
                Passionate developer with 2+ years of experience creating web applications that combine functionality
                with stunning design.
            </p>
        </BentoGridItem>
    );
}
function SkillsSection({ ...props }) {
    const skillsData = [
        {
            name: "React",
            icon: <Code className="w-5 h-5" />,
        },
        {
            name: "Next.js",
            icon: <Code className="w-5 h-5" />,
        },
        {
            name: "TypeScript",
            icon: <Code className="w-5 h-5" />,
        },
        {
            name: "Node.js",
            icon: <Code className="w-5 h-5" />,
        },
        {
            name: "Tailwind CSS",
            icon: <Code className="w-5 h-5" />,
        },
        {
            name: "Python/FastAPI",
            icon: <Code className="w-5 h-5" />,
        },
        {
            name: "GraphQL",
            icon: <Code className="w-5 h-5" />,
        },
    ];
    return (
        <BentoGridItem area={props.area}>
            <div className="flex items-center mb-4">
                <Code className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-xl font-semibold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skillsData.map((skill) => (
                    <Badge key={skill.name} variant="outline" className="text-sm font-semibold px-2 py-1 rounded-md">
                        {/* {skill.icon} */}
                        {skill.name}
                    </Badge>
                ))}
            </div>
        </BentoGridItem>
    );
}
function ProjectsSection({ ...props }) {
    return (
        <BentoGridItem
            area={props.area}
            className={cn("overflow-hidden relative cursor-pointer group p-0", props?.className)}
        >
            <img
                src={`/placeholder.svg`}
                alt="My Projects"
                width={800}
                height={600}
                className="h-96 absolute inset-0 -z-10 w-full transition-all duration-500 object-cover group-hover:scale-125"
            />
            <Link
                to="/projects"
                className="h-full bg-gradient-to-t from-primary/60 via-primary-foreground/40 to-transparent p-8 flex flex-col justify-end"
            >
                <div className="flex items-center mb-2">
                    <Briefcase className="w-6 h-6 mr-2 text-background" />
                    <h3 className="text-3xl font-bold text-background">My Projects</h3>
                </div>
                <p className="text-muted text-lg max-w-lg mb-2">
                    Explore my portfolio of web applications, design work, and development projects
                </p>
                <div className="flex items-center text-background font-medium">
                    <span>View all projects</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                </div>
            </Link>
        </BentoGridItem>
    );
}
function ContactSection({ ...props }) {
    return (
        <BentoGridItem area={props.area}>
            <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-xl font-semibold">Contact</h3>
            </div>
            <p className="text-muted-foreground mb-3">Get in touch for collaborations or opportunities</p>
            <Button variant="default" asChild className={"cursor-pointer"}>
                <a href="mailto:hgaur491@gmail.com" target="_blank">
                    Say Hello
                </a>
            </Button>
        </BentoGridItem>
    );
}
function SocialLinksSection({ ...props }) {
    const linksData = [
        {
            name: "GitHub",
            icon: <Github className="size-5" />,
            url: "https://github.com/harshG775",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="size-5" />,
            url: "https://www.linkedin.com/in/harshg775",
        },
        {
            name: "Resume",
            icon: <FileText className="size-5" />,
            url: "/resume.pdf",
            download: "Harsh-Resume.pdf",
        },
        {
            name: "Email",
            icon: <Mail className="size-5" />,
            url: "mailto:hgaur491@gmail.com",
        },
    ];
    return (
        <BentoGridItem area={props.area}>
            <div className="flex items-center mb-4">
                <Contact className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-xl font-semibold">Let's Connect!</h3>
            </div>
            <div className="text-muted-foreground ml-2 mb-4 italic">hgaur491@gmail.com</div>
            <div className="flex gap-4">
                {linksData.map((link) => (
                    <Button key={link.name} variant={"link"} asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer" download={link.download}>
                            {link.icon}
                            <span className="sr-only">{link.name}</span>
                        </a>
                    </Button>
                ))}
            </div>
        </BentoGridItem>
    );
}

function FooterSection({ ...props }) {
    const year = new Date().getFullYear();
    return (
        <BentoGridItem area={props.area}>
            <footer className="text-center">
                © {year} · Crafted with ♥️ using
                <a href="https://vite.dev/guide/" target="_blank" className="inline text-rose-500 px-1">
                    React.js+Vite
                </a>
                by Harsh.
            </footer>
        </BentoGridItem>
    );
}
