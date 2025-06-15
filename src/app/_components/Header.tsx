"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#Hero", label: "Home" },
        { href: "#About", label: "About" },
        { href: "#Skills", label: "Skills" },
        { href: "#Projects", label: "Projects" },
        { href: "#Experience", label: "Experience" },
        { href: "#Contact", label: "Contact" },
    ];

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-primary"></div>
                        <span className="text-xl font-bold text-foreground">Portfolio</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button className="bg-primary hover:bg-primary/90">Get In Touch</Button>
                    </div>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </Button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden border-t bg-card/95 backdrop-blur-md">
                        <nav className="flex flex-col space-y-4 p-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button className="bg-primary hover:bg-primary/90 w-full mt-4">Get In Touch</Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
