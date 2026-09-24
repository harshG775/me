import { createFileRoute } from "@tanstack/react-router";
import { About } from "./-components/sections/about";
import { Contact } from "./-components/sections/contact";
import { Experience } from "./-components/sections/experience";
import { Hero } from "./-components/sections/hero";
import { Skills } from "./-components/sections/skills";
import { Work } from "./-components/sections/work";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Harsh Gaur" },
            {
                name: "description",
                content:
                    "2+ years shipping production platforms: 30+ live tenants, AI-powered support tools, and browser-native products.",
            },
        ],
    }),
    component: HomePage,
});

function HomePage() {
    return (
        <main id="top" className="pt-12">
            <Hero />
            <Work />
            <Experience />
            <About />
            <Skills />
            <Contact />
        </main>
    );
}
