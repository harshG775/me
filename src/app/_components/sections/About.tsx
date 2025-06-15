import { Card, CardContent } from "@/components/ui/card";

export default function About({ ...props }: React.ComponentProps<"section">) {
    return (
        <section {...props} className="py-20 relative">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-20 h-20 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                <div className="absolute bottom-20 left-20 w-32 h-32 bg-chart-2/15 organic-shape animate-float-delayed"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 organic-shape flex items-center justify-center">
                                <div className="w-64 h-64 bg-card organic-shape-2 shadow-lg flex items-center justify-center">
                                    <span className="text-6xl">👨‍💻</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I'm a passionate web developer with over 5 years of experience creating digital
                                experiences that matter. I specialize in modern web technologies and love turning
                                complex problems into simple, beautiful solutions.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies, contributing to open
                                source projects, or sharing knowledge with the developer community.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <Card className="bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-4 text-center">
                                        <div className="text-2xl font-bold text-primary">50+</div>
                                        <div className="text-sm text-muted-foreground">Projects Completed</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-4 text-center">
                                        <div className="text-2xl font-bold text-primary">5+</div>
                                        <div className="text-sm text-muted-foreground">Years Experience</div>
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
