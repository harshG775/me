import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience({ ...props }: React.ComponentProps<"section">) {
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            period: "2022 - Present",
            description:
                "Lead frontend development for multiple high-traffic web applications. Mentored junior developers and implemented modern development practices.",
            technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
        },
        {
            title: "Full Stack Developer",
            company: "Digital Solutions Co.",
            period: "2020 - 2022",
            description:
                "Developed and maintained full-stack web applications using modern technologies. Collaborated with design and product teams to deliver exceptional user experiences.",
            technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS"],
        },
        {
            title: "Frontend Developer",
            company: "StartupXYZ",
            period: "2019 - 2020",
            description:
                "Built responsive web applications from scratch. Worked closely with UX designers to implement pixel-perfect designs and smooth user interactions.",
            technologies: ["React", "JavaScript", "CSS3", "REST APIs"],
        },
    ];

    return (
        <section {...props} className="py-20 bg-muted/30 relative">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-16 left-16 w-32 h-32 bg-accent/15 organic-shape-3 animate-float-delayed"></div>
                <div className="absolute bottom-24 right-24 w-24 h-24 bg-chart-5/20 organic-shape animate-pulse-soft"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Experience</h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <Card
                                key={index}
                                className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
                            >
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                                            <p className="text-primary font-medium">{exp.company}</p>
                                        </div>
                                        <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                                            {exp.period}
                                        </Badge>
                                    </div>

                                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

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
            </div>
        </section>
    );
}
