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
            label: "Contact",
            href: "/",
            hash: "contact",
        },
    ]

    return (
        <div className="sticky top-0 z-40">
            <header>
                <nav className="fixed inset-x-4 top-3 mx-auto h-12 max-w-(--breakpoint-sm) rounded-full border bg-background">
                    <div className="mx-auto flex h-full items-center justify-between px-3 relative">
                        <div className="ml-2">
                            <Logo />
                        </div>
                        <NavMenu className="hidden md:block flex-1 w-full" links={navLinks} />
                        <div className="block md:hidden">
                            <Button variant={"default"} size={"icon-sm"} className="rounded-full">
                                <X />
                            </Button>
                            <NavMenu className="absolute top-14 right-0" links={navLinks} orientation="vertical" />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
