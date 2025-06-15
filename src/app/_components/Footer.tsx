import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-muted/50 py-12 relative">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-4 left-1/4 w-16 h-16 bg-primary/10 organic-shape animate-pulse-soft"></div>
                <div className="absolute bottom-4 right-1/4 w-20 h-20 bg-accent/15 organic-shape-2 animate-float-delayed"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center space-x-6 mb-8">
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

                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>by Your Name</span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4">© 2024 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
