import { useState } from "react"
import { motion as M, AnimatePresence, easeOut } from "motion/react"
import { Button } from "@/components/ui/button"
import type { NavLink } from "./nav-menu"
import { NavMenu } from "./nav-menu"
import { X, Menu } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "@tanstack/react-router"

const menuVariants = {
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: easeOut,
        },
    },
}

export function Header() {
    const [open, setOpen] = useState(false)

    const navLinks: NavLink[] = [
        { label: "Home", href: "/", hash: "home" },
        { label: "About", href: "/", hash: "about" },
        { label: "Experience", href: "/", hash: "experience" },
        { label: "Projects", href: "/", hash: "projects" },
        { label: "Skills", href: "/", hash: "skills" },
        { label: "Contact", href: "/", hash: "contact" },
    ]

    return (
        <M.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="sticky top-0 z-40"
        >
            <header>
                <nav className="fixed top-3 left-4 md:left-0 md:right-0 h-12 max-w-max mx-auto rounded-full border bg-background">
                    <div className="relative flex h-full items-center px-2 md:px-3">
                        <NavMenu className="hidden md:block" links={navLinks} />
                        <div className="md:hidden">
                            <Button size="icon-sm" className="rounded-full" onClick={() => setOpen((v) => !v)}>
                                <M.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
                                    {open ? <X /> : <Menu />}
                                </M.div>
                            </Button>

                            <AnimatePresence>
                                {open && (
                                    <M.div
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={menuVariants}
                                        className="absolute top-14 left-0 flex flex-col gap-2"
                                    >
                                        <NavigationMenu orientation="vertical">
                                            <NavigationMenuList className="flex flex-col items-start gap-2">
                                                {navLinks.map((link) => (
                                                    <M.div key={link.label} variants={itemVariants}>
                                                        <NavigationMenuItem>
                                                            <NavigationMenuLink
                                                                asChild
                                                                className="block rounded-full border bg-background px-4 py-2 shadow-sm transition hover:bg-muted"
                                                            >
                                                                <Link to={link.href} hash={link.hash}>
                                                                    {link.label}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </NavigationMenuItem>
                                                    </M.div>
                                                ))}
                                            </NavigationMenuList>
                                        </NavigationMenu>
                                    </M.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </nav>
            </header>
        </M.div>
    )
}
