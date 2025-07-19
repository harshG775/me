"use client";

import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Server, Database, Wrench, Brain, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const skillCategories = [
    {
        title: "Frontend Development",
        description: "Building beautiful, responsive user interfaces",
        icon: Code2,
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "ShadCN UI",
            "Zustand",
            "React Query",
        ],
        gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
        iconColor: "text-blue-500",
        bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
        title: "Backend Development",
        description: "Scalable server-side solutions and APIs",
        icon: Server,
        skills: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "WebSockets", "Prisma ORM"],
        gradient: "from-rose-500/20 via-orange-500/20 to-red-500/20",
        iconColor: "text-rose-500",
        bgColor: "bg-rose-50 dark:bg-rose-950/20",
    },
    {
        title: "Database & Storage",
        description: "Data management and caching solutions",
        icon: Database,
        skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase Storage", "Prisma", "Drizzle ORM"],
        gradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20",
        iconColor: "text-emerald-500",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    },
    {
        title: "DevOps & Tools",
        description: "Development workflow and deployment",
        icon: Wrench,
        skills: ["Docker", "Vercel", "Git", "GitHub Actions", "Postman", "VS Code", "Linear", "Figma"],
        gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
        iconColor: "text-purple-500",
        bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    {
        title: "AI & Machine Learning",
        description: "Intelligent applications and automation",
        icon: Brain,
        skills: ["OpenAI API", "Prompt Engineering"],
        gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
        iconColor: "text-pink-500",
        bgColor: "bg-pink-50 dark:bg-pink-950/20",
    },
    {
        title: "Testing & Quality",
        description: "Ensuring code quality and reliability",
        icon: CheckCircle2,
        skills: ["Jest", "Vitest", "ESLint", "Prettier", "React Testing Library", "TypeScript"],
        gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
        iconColor: "text-slate-500",
        bgColor: "bg-slate-50 dark:bg-slate-950/20",
    },
];

export default function ModernSkills(props: React.ComponentProps<"section">) {
    return (
        <section {...props} className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--muted)] border border-[color:var(--border)] mb-6">
                        <Sparkles className="w-4 h-4 text-[color:var(--primary)]" />
                        <span className="text-sm font-medium text-[color:var(--primary)]">Skills & Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--foreground)] mb-6">
                        Technologies I Love
                    </h2>
                    <p className="text-xl text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
                        Crafting digital experiences with cutting-edge tools and technologies
                    </p>
                </div>

                {/* Skills Sections */}
                <div className="space-y-16">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`group relative rounded-3xl overflow-hidden ${category.bgColor} backdrop-blur-sm border-border hover:shadow-2xl hover:shadow-black/5 transition-all duration-500`}
                            >
                                <div
                                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[200px] ${
                                        isEven ? "" : "lg:grid-flow-col-dense"
                                    }`}
                                >
                                    {/* Title and Icon Section */}
                                    <div className={`p-8 lg:p-12 ${isEven ? "" : "lg:col-start-2"}`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className={`p-4 rounded-2xl bg-background backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                                    {category.title}
                                                </h3>
                                                <p className="text-muted-foreground text-lg leading-relaxed">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skills Section */}
                                    <div className={`p-8 lg:p-12 ${isEven ? "" : "lg:col-start-1"}`}>
                                        <div className="flex flex-wrap gap-3">
                                            {category.skills.map((skill, skillIndex) => (
                                                <Badge
                                                    key={skillIndex}
                                                    variant="secondary"
                                                    className="px-4 py-2 bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)] backdrop-blur-sm border-0 hover:scale-105 transition-all duration-200 font-medium text-sm shadow-sm"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Decorative Element */}
                                <div
                                    className={`
                                    absolute 
                                    w-full h-6 top-0
                                    bg-gradient-to-r ${category.gradient} opacity-60

                                    md:top-0 md:bottom-0 
                                    md:h-full md:w-4
                                    ${isEven ? "md:right-0" : "md:left-0"} 
                                    md:bg-gradient-to-b
                                `}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <Button className="h-12 cursor-pointer group" asChild size={"lg"}>
                        <Link href="/#Contact">
                            <span>Let&apos;s build something amazing together</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
