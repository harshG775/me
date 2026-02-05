import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "../logo"
import type { NavLink } from "./nav-menu"
import { NavMenu } from "./nav-menu"

type NavigationSheetProps = {
    links: NavLink[]
}

export const NavigationSheet = ({ links }: NavigationSheetProps) => {
    return (
        <Sheet>
            <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <SheetTrigger asChild>
                <Button className="rounded-full" size="icon" variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="px-6 py-3">
                <Logo />
                <NavMenu className="mt-6 [&>div]:h-full" links={links} orientation="vertical" />
            </SheetContent>
        </Sheet>
    )
}
