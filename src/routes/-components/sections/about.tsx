import { motion as M } from "motion/react"
import { cn } from "@/lib/utils"

export default function AboutSection({ ...props }: React.ComponentProps<"section">) {
    return (
        <M.section
            id="about"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("max-w-(--breakpoint-xl) mx-auto px-3 py-12 text-center", props.className)}
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About me</h2>

            <div className="max-w-4xl mx-auto text-base md:text-lg text-muted-foreground space-y-5">
                <p>
                    I'm a <strong>Lead Frontend Engineer</strong> and Full Stack Developer with
                    <strong> 2+ years of experience</strong>, focused on building scalable, high-performance web
                    applications using <strong>Next.js, React, Tailwind CSS, and Node.js</strong>.
                </p>

                <p>
                    Currently, I'm leading frontend architecture at{" "}
                    <strong className="text-foreground">Prabhubhakti</strong>, a SaaS platform where I'm building a{" "}
                    <strong>multi-tenant system</strong> from scratch. I design and ship production-ready features,
                    admin dashboards, and payment flows, improving <strong>SEO to 95+</strong> and reducing merchant
                    onboarding time by <strong>70%</strong>.
                </p>

                <p>
                    Previously, I worked at <strong className="text-foreground">Adda247 (Metis Eduventures)</strong>,
                    building internal tools and interactive platforms. I enjoy translating complex business logic into
                    clean, intuitive user experiences.
                </p>
            </div>
        </M.section>
    )
}
