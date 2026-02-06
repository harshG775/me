import { cn } from "@/lib/utils"
import { motion as M } from "motion/react"

export default function AboutSection({ ...props }: React.ComponentProps<"section">) {
    return (
        <M.section
            id="about"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("max-w-6xl mx-auto px-3 py-12 text-center", props.className)}
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About me</h2>

            <div className="max-w-4xl mx-auto text-base md:text-lg text-muted-foreground space-y-6">
                <p>
                    I am a <strong>Lead Frontend Engineer</strong> and Full Stack Developer with over 2 years of
                    experience. Currently, I am architecting the digital infrastructure at{" "}
                    <strong className="text-foreground">Prabhubhakti (Spiritual SaaS)</strong>, building a scalable{" "}
                    <strong>multi-tenant platform</strong> from the ground up using{" "}
                    <strong>Next.js, Tailwind CSS, and Node.js</strong>.
                </p>

                <p>
                    My recent work focuses on complex system design, including <strong>domain/subdomain routing</strong>{" "}
                    for distinct tenants like <strong>Astrologer storefronts and E-book platforms</strong>. I developed
                    comprehensive <strong>Admin and Superadmin dashboards</strong> to manage these ecosystems,
                    integrating <strong>Razorpay</strong> and optimizing performance to achieve{" "}
                    <strong>95+ SEO scores</strong>
                    while reducing merchant onboarding time by <strong>70%</strong>.
                </p>

                <p>
                    Previously, I built internal chatbot tools at <strong>Adda247</strong> and LeetCode-style coding
                    platforms. I am passionate about bridging the gap between sophisticated backend logic and polished,
                    interactive user interfaces.
                </p>
            </div>
        </M.section>
    )
}
