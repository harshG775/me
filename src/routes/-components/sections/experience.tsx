import { Timeline } from "#/components/ui/timeline";
import { experience } from "#/data/portfolio/experience";

export function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-heading" className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
            <p className="text-xs font-normal tracking-widest text-mist-400 uppercase">02</p>
            <h2 id="experience-heading" className="mt-1 text-3xl font-bold lg:text-4xl">
                Experience
            </h2>
            <div className="mt-12 lg:mt-16">
                <Timeline items={experience} />
            </div>
        </section>
    );
}
