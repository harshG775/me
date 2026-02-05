import { Button } from "@/components/ui/button"
import { Logo } from "../logo"
import type { NavLink } from "./nav-menu"
import { NavMenu } from "./nav-menu"
import { NavigationSheet } from "./navigation-sheet"
import { Link } from "@tanstack/react-router"

export function Header() {
    const navLinks: NavLink[] = [
        { label: "Home", href: "/" },
        { label: "Experience", href: "/experience" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ]

    return (
        <div className="sticky top-0 z-40">
            <header>
                <nav className="fixed inset-x-4 top-6 mx-auto h-16 max-w-(--breakpoint-xl) rounded-full border bg-background">
                    <div className="mx-auto flex h-full items-center justify-between px-4">
                        <Logo />

                        {/* Desktop Menu */}
                        <NavMenu className="hidden md:block" links={navLinks} />

                        <div className="flex items-center gap-3">
                            <Button asChild className="rounded-full">
                                <Link to="/contact">Hire Me</Link>
                            </Button>

                            {/* Mobile Menu */}
                            <div className="md:hidden">
                                <NavigationSheet links={navLinks} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
