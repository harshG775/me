import { GithubIcon, LinkedinIcon } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { Logo } from "../logo"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const footerLinks = [
    { label: "Home", href: "/", hash: "home" },
    { label: "About", href: "/", hash: "about" },
    { label: "Experience", href: "/", hash: "experience" },
    { label: "Projects", href: "/", hash: "projects" },
    { label: "Skills", href: "/", hash: "skills" },
    { label: "Contact", href: "/", hash: "contact" },
]

export function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-(--breakpoint-lg)">
                <div className="flex flex-col items-center justify-start py-12">
                    <Logo />

                    <ul className="mt-6 flex flex-wrap items-center gap-4">
                        {footerLinks.map(({ label, href, hash }) => (
                            <li key={label}>
                                <Link className="text-muted-foreground hover:text-foreground" to={href} hash={hash}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Separator />

                <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
                    <span className="text-muted-foreground">
                        &copy; {new Date().getFullYear()}{" "}
                        <Link to="/" target="_blank">
                            harsh gaur
                        </Link>
                        . All rights reserved.
                    </span>

                    <TooltipProvider>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://github.com/harshG775"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className="p-3"
                                    >
                                        <GithubIcon className="h-5 w-5 hover:text-foreground transition-colors" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>GitHub</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://www.linkedin.com/in/harshg775"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="p-3"
                                    >
                                        <LinkedinIcon className="h-5 w-5 hover:text-foreground transition-colors" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </TooltipProvider>
                </div>
            </div>
        </footer>
    )
}
