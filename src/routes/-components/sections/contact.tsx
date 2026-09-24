import { ExternalLink } from "#/components/external-link";

export function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
            <p className="text-xs font-normal tracking-widest text-mist-400 uppercase">05</p>
            <h2 id="contact-heading" className="mt-1 text-4xl font-bold lg:text-5xl">
                Let's talk.
            </h2>
            <p className="mt-4 max-w-lg text-base text-mist-700 lg:text-lg">
                I'm open to front-end engineer roles, especially on product teams working with React and TypeScript.
                Email is the fastest way to reach me.
            </p>
            <a href="mailto:hgaur491@gmail.com" className="mt-8 block text-xl font-bold sm:text-2xl">
                hgaur491@gmail.com
            </a>
            <div className="mt-5 max-w-md border-t border-mist-200 text-base">
                <ExternalLink
                    href="https://www.linkedin.com/in/harshg775"
                    className="flex items-center justify-between border-b border-mist-200 py-4"
                >
                    <span>LinkedIn</span>
                    <span>↗</span>
                </ExternalLink>
                <ExternalLink
                    href="https://github.com/harshG775"
                    className="flex items-center justify-between border-b border-mist-200 py-4"
                >
                    <span>GitHub</span>
                    <span>↗</span>
                </ExternalLink>
                <p className="py-4 text-mist-500">Delhi, India</p>
            </div>
        </section>
    );
}
