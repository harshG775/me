import { ExternalLink } from "#/components/external-link";

export function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="max-w-4xl mx-auto">
            <h2 id="contact-heading">Let's talk.</h2>
            <p>
                I'm open to front-end engineer roles, especially on product teams working with React and TypeScript.
                Email is the fastest way to reach me.
            </p>
            <p>
                <a href="mailto:hgaur491@gmail.com">hgaur491@gmail.com</a>
            </p>
            <ul>
                <li>
                    <ExternalLink href="https://github.com/harshG775">GitHub</ExternalLink>
                </li>
                <li>
                    <ExternalLink href="https://www.linkedin.com/in/harshg775">LinkedIn</ExternalLink>
                </li>
            </ul>
        </section>
    );
}
