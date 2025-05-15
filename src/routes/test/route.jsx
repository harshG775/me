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
                }}
            >
                <BentoGridItem area="intro" title="Featured Content" description="This spans two columns on desktop">
                    <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Featured Content</h2>
                    </div>
                </BentoGridItem>
                <BentoGridItem area="about" title="Featured Content" description="This spans two columns on desktop">
                    <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Featured Content</h2>
                    </div>
                </BentoGridItem>
                <BentoGridItem area="skills" title="Featured Content" description="This spans two columns on desktop">
                    <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Featured Content</h2>
                    </div>
                </BentoGridItem>
                <BentoGridItem area="projects" title="Featured Content" description="This spans two columns on desktop">
                    <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Featured Content</h2>
                    </div>
                </BentoGridItem>
                <BentoGridItem area="contact" title="Featured Content" description="This spans two columns on desktop">
                    <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Featured Content</h2>
                    </div>
                </BentoGridItem>
                <BentoGridItem area="social" title="Featured Content" description="This spans two columns on desktop">
                    <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Featured Content</h2>
                    </div>
                </BentoGridItem>
                <BentoGridItem area="footer" title="Featured Content" description="This spans two columns on desktop">
                    <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Featured Content</h2>
                    </div>
                </BentoGridItem>
            </BentoGridContainer>
            {/* <div className={cn("max-w-[96rem] mx-auto lg:h-dvh p-4", "grid-container")}>
                <IntroSection className="intro" />
                <AboutMeSection className="about" />
                <SkillsSection className="skills" />
                <ProjectsSection className="projects" />
                <ContactSection className="contact" />
                <SocialLinksSection className="social" />
                <FooterSection className="footer" />
            </div> */}
        </main>
    );
}
