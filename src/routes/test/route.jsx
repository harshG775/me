import { BentoGridContainer } from "@/components/ui/bento-grid/bento-grid-container";
import { BentoGridItem } from "@/components/ui/bento-grid/bento-grid-item";

export default function TestRoute() {
    return (
        <main className="bg-primary/10">
            <BentoGridContainer
                className="max-w-6xl mx-auto"
                gap={4}
                initialTemplate={{
                    desktop: ["a a b", "c d d", "e f f"],
                    tablet: ["a a b", "c d d", "e f f"],
                    mobile: ["a", "b", "c", "d", "e", "f"],
                }}
            >
                <BentoGridItem area="a" title="Featured Content" description="This spans two columns on desktop">
                    <div className="relative h-full min-h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white">Featured Content</h2>
                    </div>
                </BentoGridItem>

                <BentoGridItem area="b" title="Quick Stats" description="Important metrics">
                    <div className="flex h-full flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 p-4">
                        <span className="text-4xl font-bold text-white">87%</span>
                        <span className="text-sm text-white">Conversion Rate</span>
                    </div>
                </BentoGridItem>

                <BentoGridItem area="c" title="Recent Activity">
                    <div className="h-full rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 p-4">
                        <ul className="text-white">
                            <li className="mb-1">• New user signup</li>
                            <li className="mb-1">• Product update</li>
                            <li>• System notification</li>
                        </ul>
                    </div>
                </BentoGridItem>

                <BentoGridItem area="d" title="Media Gallery" description="Latest images">
                    <div className="grid h-full grid-cols-2 gap-2 rounded-lg p-2">
                        <div className="aspect-square rounded-md bg-gradient-to-br from-blue-400 to-cyan-300"></div>
                        <div className="aspect-square rounded-md bg-gradient-to-br from-emerald-400 to-teal-300"></div>
                        <div className="aspect-square rounded-md bg-gradient-to-br from-violet-400 to-purple-300"></div>
                        <div className="aspect-square rounded-md bg-gradient-to-br from-rose-400 to-pink-300"></div>
                    </div>
                </BentoGridItem>

                <BentoGridItem area="e" title="Quick Actions">
                    <div className="flex h-full flex-col justify-center gap-2 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 p-4">
                        <button className="rounded-md bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30">
                            Add New Item
                        </button>
                        <button className="rounded-md bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30">
                            View Reports
                        </button>
                    </div>
                </BentoGridItem>

                <BentoGridItem area="f" title="Upcoming Events" description="Calendar preview">
                    <div className="grid h-full grid-cols-7 gap-1 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 p-4">
                        {Array.from({ length: 31 }).map((_, i) => (
                            <div
                                key={i}
                                className={`flex aspect-square items-center justify-center rounded-md text-xs font-medium text-white ${
                                    i === 14 ? "bg-white/30" : "hover:bg-white/10"
                                }`}
                            >
                                {i + 1}
                            </div>
                        ))}
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