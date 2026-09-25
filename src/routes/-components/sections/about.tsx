import { about } from "#/data/portfolio/about";

export function About() {
    return (
        <section id="about" aria-labelledby="about-heading" className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                    <p className="text-xs font-normal tracking-widest text-mist-400 uppercase">03</p>
                    <h2 id="about-heading" className="mt-1 text-2xl font-bold">
                        About
                    </h2>
                </div>
                <div className="flex flex-col gap-5 text-base leading-relaxed text-mist-800 lg:col-span-6 lg:col-start-5 lg:text-lg">
                    {about.paragraphs.map((paragraph, index) => (
                        <p key={paragraph} className={index > 0 ? "text-mist-600" : undefined}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
            <div className="mt-10 border-t border-mist-200 pt-8 lg:mt-12">
                <h3 className="text-xs font-medium tracking-widest text-mist-400 uppercase">Education</h3>
                <ul className="mt-3 space-y-2 text-sm text-mist-700">
                    {about.education.map((entry) => (
                        <li key={entry}>{entry}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
