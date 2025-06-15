import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ ...props }: React.ComponentProps<"section">) {
    return (
        <section {...props} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 organic-shape animate-float"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-accent/30 organic-shape-2 animate-float-delayed"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary/25 organic-shape-3 animate-pulse-soft"></div>
                <div className="absolute bottom-20 right-10 w-28 h-28 bg-chart-3/20 organic-shape animate-float"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                        Hello, I&apos;m <span className="text-primary">Harsh</span>. I&apos;m a full stack web developer.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        I&apos;m a passionate web developer crafting beautiful, functional experiences that bring ideas
                        to life through code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            View My Work
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            Download Resume
                        </Button>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </div>
            </div>
        </section>
    );
}
