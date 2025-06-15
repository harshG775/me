import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills({ ...props }: React.ComponentProps<"section">) {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
            color: "bg-chart-1/10 border-chart-1/20",
        },
        {
            title: "Backend",
            skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
            color: "bg-chart-2/10 border-chart-2/20",
        },
        {
            title: "Tools & Others",
            skills: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack", "Linux"],
            color: "bg-chart-3/10 border-chart-3/20",
        },
    ];

    return (
        <section {...props} className="py-20 bg-muted/30 relative">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-1/4 w-24 h-24 bg-primary/10 organic-shape animate-float"></div>
                <div className="absolute bottom-32 right-1/4 w-36 h-36 bg-accent/15 organic-shape-3 animate-float-delayed"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Skills & Technologies</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <Card
                                key={index}
                                className={`${category.color} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                            >
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {category.skills.map((skill, skillIndex) => (
                                            <Badge
                                                key={skillIndex}
                                                variant="secondary"
                                                className="bg-card/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                            >
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
        </section>
    );
}
