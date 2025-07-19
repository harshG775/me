"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
                    <Link href="/" className="group relative">
                        <div className="flex items-center space-x-3">
                            {/* Logo Container with Hover Effects */}
                            <div className="relative">
                                {/* Outer decorative circles */}
                                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                                <div className="absolute -inset-1 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-float" />

                                {/* Main logo circle */}
                                <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ease-out">
                                    {/* Inner glow effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

                                    {/* Letter H */}
                                    <span className="relative text-xl font-bold text-white group-hover:scale-110 transition-transform duration-200">
                                        H
                                    </span>

                                    {/* Hover ring effect */}
                                    <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
                                </div>

                                {/* Floating particles effect on hover */}
                                <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-primary/80 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100" />
                                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-primary/70 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-400" />
                            </div>

                            {/* Brand name - visible on larger screens */}
                            <div className="hidden sm:block">
                                <span className="text-xl font-bold text-foreground group-hover:text-primary/80 transition-colors duration-300">
                                    Harsh
                                </span>
                                <div className="h-0.5 w-0 bg-gradient-to-r from-primary/80 to-primary group-hover:w-full transition-all duration-300 ease-out" />
                            </div>
                        </div>
                    </Link>

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
                            <Button asChild className="bg-primary hover:bg-primary/90 w-full mt-4">
                                <Link href="#Contact">Get In Touch</Link>
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
