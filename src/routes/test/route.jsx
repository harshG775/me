import { BentoGridContainer, BentoGridItem } from "@/components/ui/bento-grid";

export default function TestRoute() {
    return (
        <main className="bg-primary/10">
            <BentoGridContainer
                className="max-w-[96rem] mx-auto h-dvh p-4"
                gap={4}
                initialTemplate={{
                    desktop: [
                        "intro intro projects projects",
                        "about about projects projects",
                        "skills skills social contact",
                        "skills skills footer footer",
                    ],
                    tablet: [
                        "intro intro",
                        "about skills",
                        "projects projects",
                        "contact social",
                        "footer footer",
                    ],
                    mobile: [
                        "intro",
                        "about",
                        "skills",
                        "projects",
                        "contact",
                        "social",
                        "footer",
                    ],
                }}
            >
                <BentoGridItem area="intro" title="intro Content" description="This spans two columns on desktop"/>
                <BentoGridItem area="about" title="about Content" description="This spans two columns on desktop"/>
                <BentoGridItem area="skills" title="skills Content" description="This spans two columns on desktop"/>
                <BentoGridItem area="projects" title="projects Content" description="This spans two columns on desktop"/>
                <BentoGridItem area="contact" title="contact Content" description="This spans two columns on desktop"/>
                <BentoGridItem area="social" title="social Content" description="This spans two columns on desktop"/>
                <BentoGridItem area="footer" title="footer Content" description="This spans two columns on desktop"/>
            </BentoGridContainer>
        </main>
    );
}
