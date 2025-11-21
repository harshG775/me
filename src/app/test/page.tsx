import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Globe } from "lucide-react";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background">
            <div className="fixed z-[9990] top-4 right-4">
                <div className="hidden sm:block md:hidden">sm</div>
                <div className="hidden md:block lg:hidden">md</div>
                <div className="hidden lg:block xl:hidden">lg</div>
                <div className="hidden xl:block 2xl:hidden">xl</div>
                <div className="hidden 2xl:block">2xl</div>
            </div>

            {/* Hero Section with Sticky Layers */}
            <section className="relative">
                <div className="z-50 sticky -bottom-[40%] min-h-screen rounded-b-[4rem] bg-primary flex items-center justify-center">
                    <div className="text-center text-primary-foreground px-6 max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Frontend Developer</h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Crafting beautiful, responsive web experiences with modern technologies
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8">
                                View My Work
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                            >
                                Get In Touch
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="z-40 sticky -bottom-[40%] min-h-screen rounded-b-[4rem] bg-card flex items-center justify-center">
                    <div className="max-w-6xl mx-auto px-6 py-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6 text-foreground">About Me</h2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    I'm a passionate frontend developer with 5+ years of experience creating exceptional
                                    digital experiences. I specialize in React, TypeScript, and modern CSS frameworks to
                                    build scalable, user-friendly applications.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <Badge variant="secondary">React</Badge>
                                    <Badge variant="secondary">TypeScript</Badge>
                                    <Badge variant="secondary">Next.js</Badge>
                                    <Badge variant="secondary">Tailwind CSS</Badge>
                                    <Badge variant="secondary">Node.js</Badge>
                                </div>
                                <div className="flex gap-4">
                                    <Button variant="outline" size="icon">
                                        <Github className="h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" size="icon">
                                        <Mail className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                                    <img
                                        src="/professional-developer-portrait.png"
                                        alt="Developer Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="z-30 sticky -bottom-[40%] min-h-screen rounded-b-[4rem] bg-background">
                    <div className="max-w-6xl mx-auto px-6 py-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "E-Commerce Platform",
                                    description: "Modern shopping experience with React and Stripe integration",
                                    image: "/modern-ecommerce-website.png",
                                    tech: ["React", "Node.js", "Stripe"],
                                    color: "from-blue-500 to-purple-600",
                                },
                                {
                                    title: "Task Management App",
                                    description: "Collaborative project management tool with real-time updates",
                                    image: "/task-management-dashboard.png",
                                    tech: ["Next.js", "Socket.io", "MongoDB"],
                                    color: "from-green-500 to-teal-600",
                                },
                                {
                                    title: "Portfolio Website",
                                    description: "Responsive portfolio showcasing creative work and skills",
                                    image: "/creative-portfolio-website.png",
                                    tech: ["Vue.js", "GSAP", "Tailwind"],
                                    color: "from-pink-500 to-rose-600",
                                },
                            ].map((project, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            {project.title}
                                            <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <Badge key={tech} variant="outline">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="z-20 sticky -bottom-[40%] min-h-screen rounded-b-[4rem] bg-muted">
                    <div className="max-w-6xl mx-auto px-6 py-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Skills & Expertise</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Code,
                                    title: "Frontend Development",
                                    skills: ["React", "Vue.js", "Angular", "TypeScript"],
                                },
                                {
                                    icon: Palette,
                                    title: "UI/UX Design",
                                    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
                                },
                                {
                                    icon: Smartphone,
                                    title: "Mobile Development",
                                    skills: ["React Native", "Flutter", "PWA", "Responsive"],
                                },
                                {
                                    icon: Globe,
                                    title: "Web Technologies",
                                    skills: ["HTML5", "CSS3", "JavaScript", "WebGL"],
                                },
                            ].map((category, index) => (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                                            <category.icon className="h-8 w-8 text-primary-foreground" />
                                        </div>
                                        <CardTitle className="text-xl">{category.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {category.skills.map((skill) => (
                                                <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="z-10 sticky -bottom-[40%] min-h-screen bg-background">
                    <div className="max-w-4xl mx-auto px-6 py-20">
                        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>
                        <Card className="max-w-2xl mx-auto">
                            <CardHeader>
                                <CardTitle>Let's Work Together</CardTitle>
                                <CardDescription>
                                    Have a project in mind? I'd love to hear about it and discuss how we can bring your
                                    ideas to life.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Name</label>
                                        <Input placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Email</label>
                                        <Input type="email" placeholder="your.email@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Subject</label>
                                    <Input placeholder="Project inquiry" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Message</label>
                                    <Textarea placeholder="Tell me about your project..." rows={5} />
                                </div>
                                <Button className="w-full" size="lg">
                                    Send Message
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}
