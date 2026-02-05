import { LinkedinIcon, GithubIcon, TwitchIcon, TwitterIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Link } from "@tanstack/react-router"
import { Logo } from "../logo"

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
]

export function Footer() {
    return (
        <footer className="border-t">
            <div className="mx-auto max-w-(--breakpoint-xl)">
                <div className="flex flex-col items-center justify-start py-12">
                    <Logo />

                    <ul className="mt-6 flex flex-wrap items-center gap-4">
                        {footerLinks.map(({ label, href }) => (
                            <li key={label}>
                                <Link className="text-muted-foreground hover:text-foreground" to={href}>
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

                    <div className="flex items-center gap-5 text-muted-foreground">
                        <Link to="/" target="_blank">
                            <GithubIcon className="h-5 w-5" />
                        </Link>
                        <Link to="/" target="_blank">
                            <LinkedinIcon className="h-5 w-5" />
                        </Link>
                        <Link to="/" target="_blank">
                            <TwitterIcon className="h-5 w-5" />
                        </Link>
                        <Link to="/" target="_blank">
                            <TwitchIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
