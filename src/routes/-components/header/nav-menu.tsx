"use client"

import type { ComponentProps } from "react"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "@tanstack/react-router"

export type NavLink = {
    label: string
    href: string
    hash?: string
}

type NavMenuProps = ComponentProps<typeof NavigationMenu> & {
    links: NavLink[]
}

export const NavMenu = ({ links, ...props }: NavMenuProps) => (
    <NavigationMenu {...props}>
        <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-end data-[orientation=vertical]:justify-start">
            {links.map((link) => (
                <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to={link.href} hash={link.hash}>
                            {link.label}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            ))}
        </NavigationMenuList>
    </NavigationMenu>
)
