import * as React from "react"
import { cn } from "@/lib/utils"

type SectionContextValue = {
    headingId: string
}

const SectionContext = React.createContext<SectionContextValue | null>(null)

const useSectionContext = () => {
    const ctx = React.useContext(SectionContext)
    if (!ctx) {
        throw new Error("Section.* must be used inside <Section>")
    }
    return ctx
}

const SectionRoot = React.forwardRef<
    HTMLElement,
    Omit<React.ComponentProps<"section">, "id"> & {
        id: string
    }
>(({ id, className, ...props }, ref) => {
    const headingId = `${id}-heading`

    return (
        <SectionContext.Provider value={{ headingId }}>
            <section
                ref={ref}
                id={id}
                aria-labelledby={headingId}
                className={cn("relative pt-16 px-3 sm:px-4 lg:px-6", className)}
                {...props}
            />
        </SectionContext.Provider>
    )
})
SectionRoot.displayName = "Section"

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const SectionHeading = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement> & {
        as?: HeadingLevel
    }
>(({ as = "h2", className, ...props }, ref) => {
    const { headingId } = useSectionContext()
    const Heading = as

    return (
        <Heading
            ref={ref}
            id={headingId}
            className={cn(
                "font-bold tracking-tight mb-12",
                as === "h1" && "text-4xl md:text-6xl",
                as === "h2" && "text-3xl md:text-5xl",
                as === "h3" && "text-2xl md:text-4xl",
                as === "h4" && "text-xl md:text-3xl",
                as === "h5" && "text-lg md:text-2xl",
                as === "h6" && "text-base md:text-xl",
                className,
            )}
            {...props}
        />
    )
})
SectionHeading.displayName = "Section.Heading"

const SectionContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("space-y-6", className)} {...props} />
})
SectionContent.displayName = "Section.Content"

export const Section = Object.assign(SectionRoot, {
    Heading: SectionHeading,
    Content: SectionContent,
})
