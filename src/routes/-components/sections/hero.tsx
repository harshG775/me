import { ExternalLink } from "#/components/external-link";
import { GithubIcon } from "#/components/icons/github-icon";
import { LinkedinIcon } from "#/components/icons/linkedin-icon";
import { MailIcon } from "#/components/icons/mail-icon";
import { ResumeIcon } from "#/components/icons/resume-icon";
import { hero } from "#/data/portfolio/hero";

export function Hero() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="max-w-5xl mx-auto flex flex-col items-center px-4 py-20 lg:py-28 text-center"
        >
            <div className="mt-5 rounded-full">
                <img
                    src={hero.profileImage.src}
                    alt={hero.profileImage.alt}
                    className="h-24 w-24 rounded-full bg-mist-100 object-cover"
                />
            </div>
            <h1 id="hero-heading" className="mt-5 font-normal text-2xl lg:text-4xl">
                Hi, I'm <span className="font-medium text-primary">{hero.name}</span>
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 font-normal text-2xl lg:text-4xl">
                <span className="pb-1">
                    {hero.tagline.prefix} <span className="italic text-primary">{hero.tagline.emphasis}</span>{" "}
                    {hero.tagline.suffix}
                </span>
                <span className="flex gap-1">
                    <span className="text-primary">{"✦"}</span>
                    <span className="rounded-full border border-mist-300 px-5 py-1 text-primary bg-primary/10 font-medium text-2xl">
                        {hero.tagline.badge}
                    </span>
                </span>
            </div>
            <p className="mt-3 text-xs font-normal tracking-widest text-mist-400 uppercase">{hero.subtext}</p>

            <div className="mt-8 flex items-center justify-center gap-3">
                <ExternalLink href={hero.links.github}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 hover:bg-primary/10 hover:text-mist-900 text-lg">
                        <GithubIcon />
                    </span>
                </ExternalLink>
                <ExternalLink href={hero.links.linkedin}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 hover:bg-primary/10 hover:text-mist-900 text-lg">
                        <LinkedinIcon />
                    </span>
                </ExternalLink>
                <a href={`mailto:${hero.links.email}`}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 hover:bg-primary/10 hover:text-mist-900 text-lg">
                        <MailIcon />
                    </span>
                </a>
                <a href={hero.links.resume} download title="Download resume">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 hover:bg-primary/10 hover:text-mist-900 text-lg">
                        <ResumeIcon />
                    </span>
                </a>
            </div>
        </section>
    );
}
