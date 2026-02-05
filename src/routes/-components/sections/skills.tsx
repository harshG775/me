"use client"

import { easeOut, motion as M } from "motion/react"
import { Code2, Server, Database, Wrench, Brain, CheckCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut },
    },
}

const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.03 },
    }),
}

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
]

export default function SkillsSection() {
    return (
        <section className="max-w-6xl mx-auto px-3 py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">My Skills</h2>

            <M.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {skillCategories.map((category) => {
                    const Icon = category.icon

                    return (
                        <M.div
                            key={category.title}
                            variants={cardVariants}
                            className={cn(
                                "relative rounded-2xl border border-black/5 dark:border-white/10 p-6 overflow-hidden",
                                category.bgColor,
                            )}
                        >
                            {/* Gradient overlay */}
                            <div
                                className={cn("absolute inset-0 -z-10 bg-linear-to-br opacity-70", category.gradient)}
                            />

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-3">
                                <Icon className={cn("h-6 w-6", category.iconColor)} />
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>

                            <p className="text-sm text-muted-foreground mb-5">{category.description}</p>

                            {/* Skills */}
                            <ul className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <M.li
                                        key={skill}
                                        variants={skillVariants}
                                        custom={i}
                                        className="rounded-md bg-white/70 dark:bg-white/10 px-3 py-1.5 text-sm"
                                    >
                                        {skill}
                                    </M.li>
                                ))}
                            </ul>
                        </M.div>
                    )
                })}
            </M.div>
        </section>
    )
}
