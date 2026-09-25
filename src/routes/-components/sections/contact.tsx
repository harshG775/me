import { ExternalLink } from "#/components/external-link";
import { contact } from "#/data/portfolio/contact";

export function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
            <p className="text-xs font-normal tracking-widest text-mist-400 uppercase">05</p>
            <h2 id="contact-heading" className="mt-1 text-4xl font-bold lg:text-5xl">
                {contact.heading}
            </h2>
            <p className="mt-4 max-w-lg text-base text-mist-700 lg:text-lg">{contact.body}</p>
            <a href={`mailto:${contact.email}`} className="mt-8 block text-xl font-bold sm:text-2xl">
                {contact.email}
            </a>
            <div className="mt-5 max-w-md border-t border-mist-200 text-base">
                <ExternalLink
                    href={contact.linkedin}
                    className="flex items-center justify-between border-b border-mist-200 py-4"
                >
                    <span>LinkedIn</span>
                    <span>↗</span>
                </ExternalLink>
                <ExternalLink
                    href={contact.github}
                    className="flex items-center justify-between border-b border-mist-200 py-4"
                >
                    <span>GitHub</span>
                    <span>↗</span>
                </ExternalLink>
                <p className="py-4 text-mist-500">{contact.location}</p>
            </div>
        </section>
    );
}
