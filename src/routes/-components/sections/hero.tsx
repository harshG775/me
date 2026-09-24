import { startTransition, useState, ViewTransition } from "react";
import { ExternalLink } from "#/components/external-link";
import { GithubIcon } from "#/components/icons/github-icon";
import { LinkedinIcon } from "#/components/icons/linkedin-icon";
import { MailIcon } from "#/components/icons/mail-icon";
import { ResumeIcon } from "#/components/icons/resume-icon";
import { ImagePopup } from "#/components/ui/image-popup";

const PROFILE_PHOTO_NAME = "hero-profile-photo";

export function Hero() {
    const [isPhotoOpen, setIsPhotoOpen] = useState(false);

    return (
        <section
            aria-labelledby="hero-heading"
            className="max-w-5xl mx-auto flex flex-col items-center px-4 py-20 lg:py-28 text-center"
        >
            {!isPhotoOpen && (
                <ViewTransition name={PROFILE_PHOTO_NAME}>
                    <button
                        type="button"
                        onClick={() => startTransition(() => setIsPhotoOpen(true))}
                        aria-label="Open profile photo"
                        className="mt-5 rounded-full"
                    >
                        <img
                            src="/profile.png"
                            alt="Harsh Gaur"
                            className="h-24 w-24 rounded-full bg-mist-100 object-cover"
                        />
                    </button>
                </ViewTransition>
            )}
            <h1 id="hero-heading" className="mt-5 font-normal text-2xl lg:text-4xl">
                Hi, I'm <span className="font-medium text-primary">Harsh</span>
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 font-normal text-2xl lg:text-4xl">
                <span className="pb-1">
                    I orchestrate <span className="italic text-primary">ideas</span> into products with
                </span>
                <span className="flex gap-1">
                    <span className="text-primary">{"✦"}</span>
                    <span className="rounded-full border border-mist-300 px-5 py-1 text-primary bg-primary/10 font-medium text-2xl">
                        {"React.js"}
                    </span>
                </span>
            </div>
            <p className="mt-3 text-xs font-normal tracking-widest text-mist-400 uppercase">
                Front-end Engineer · Delhi · Open to roles
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
                <ExternalLink href="https://github.com/harshG775">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 hover:bg-primary/10 hover:text-mist-900 text-lg">
                        <GithubIcon />
                    </span>
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/harshg775">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 hover:bg-primary/10 hover:text-mist-900 text-lg">
                        <LinkedinIcon />
                    </span>
                </ExternalLink>
                <a href="mailto:hgaur491@gmail.com">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 hover:bg-primary/10 hover:text-mist-900 text-lg">
                        <MailIcon />
                    </span>
                </a>
                <a href="/harsh-gaur-frontend-engineer.pdf" download title="Download resume">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 hover:bg-primary/10 hover:text-mist-900 text-lg">
                        <ResumeIcon />
                    </span>
                </a>
            </div>

            {isPhotoOpen && (
                <ImagePopup
                    src="/profile.png"
                    alt="Harsh Gaur"
                    name={PROFILE_PHOTO_NAME}
                    onClose={() => startTransition(() => setIsPhotoOpen(false))}
                />
            )}
        </section>
    );
}
