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
    onClick?: () => void
}

type NavMenuProps = ComponentProps<typeof NavigationMenu> & {
    links: NavLink[]
}

export const NavMenu = ({ links, ...props }: NavMenuProps) => (
    <NavigationMenu {...props}>
        <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
            {links.map((link) => (
                <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        {link?.onClick ? (
                            <button onClick={link?.onClick}>{link.label}</button>
                        ) : (
                            <Link to={link.href}>{link.label}</Link>
                        )}
                    </NavigationMenuLink>
                </NavigationMenuItem>
            ))}
        </NavigationMenuList>
    </NavigationMenu>
)
