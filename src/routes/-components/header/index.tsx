import { Button } from "@/components/ui/button"
import { Logo } from "../logo"
import type { NavLink } from "./nav-menu"
import { NavMenu } from "./nav-menu"
import { X } from "lucide-react"

export function Header() {
    const navLinks: NavLink[] = [
        {
            label: "Home",
            href: "/",
            hash: "home",
        },
        {
            label: "About",
            href: "/",
            hash: "about",
        },
        {
            label: "Experience",
            href: "/",
            hash: "experience",
        },
        {
            label: "Projects",
            href: "/",
            hash: "projects",
        },
        {
            label: "Skills",
            href: "/",
            hash: "skills",
        },
        {
            label: "Contact",
            href: "/",
            hash: "contact",
        },
    ]

    return (
        <div className="sticky top-0 z-40">
            <header>
                <nav className="fixed top-3 left-4 md:left-0 mx-auto right-auto md:right-0 h-12 max-w-max rounded-full border bg-background">
                    <div className="mx-auto flex h-full items-center justify-between px-2 md:px-3 relative">
                        <NavMenu className="hidden md:block flex-1 w-full mx-auto" links={navLinks} />
                        <div className="block md:hidden">
                            <Button variant={"default"} size={"icon-sm"} className="rounded-full">
                                <X />
                            </Button>
                            <NavMenu className="absolute top-14 left-0" links={navLinks} orientation="vertical" />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
