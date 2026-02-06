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

            <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
                I'm a passionate web developer crafting beautiful, functional experiences that bring ideas to life
                through code.
            </p>
        </M.section>
    )
}
