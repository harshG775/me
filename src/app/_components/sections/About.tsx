import { Card, CardContent } from "@/components/ui/card";

export default function About({ ...props }: React.ComponentProps<"section">) {
    return (
        <section {...props} className="py-20 relative">
            {/* Decorative Background Shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-20 h-20 bg-accent/20 organic-shape-2 animate-pulse-soft" />
                <div className="absolute bottom-20 left-20 w-32 h-32 bg-chart-2/15 organic-shape animate-float-delayed" />
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Visual/Illustration Placeholder */}
                        <div>
                            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 organic-shape flex items-center justify-center">
                                <div className="w-64 h-64 bg-card organic-shape-2 shadow-lg flex items-center justify-center text-4xl font-semibold text-muted-foreground">
                                    Web <span className="text-primary">Dev</span>
                                </div>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I’m a frontend-focused Full Stack Developer with 2+ years of experience building
                                production-ready, scalable, and interactive web applications. My expertise lies in{" "}
                                <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
                                <strong>ShadCN UI</strong>, backed by solid skills in backend development with{" "}
                                <strong>Node.js</strong> and <strong>Express.js</strong>.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I've worked on diverse projects, including an internal chatbot platform at Adda247, a
                                LeetCode-style coding platform, and a SaaS landing page CMS. I'm passionate about
                                creating polished UIs, writing clean code, and delivering end-to-end solutions that
                                balance performance, design, and functionality.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <Card className="bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-4 text-center">
                                        <div className="text-2xl font-bold text-primary">10+</div>
                                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-4 text-center">
                                        <div className="text-2xl font-bold text-primary">2+ yrs</div>
                                        <div className="text-sm text-muted-foreground">Professional Experience</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
