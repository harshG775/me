import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";



const BentoGridContext = createContext(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useBentoGrid() {
    const context = useContext(BentoGridContext);
    if (!context) {
        throw new Error("useBentoGrid must be used within a BentoGridProvider");
    }
    return context;
}

export function BentoGridProvider({
    children,
    initialTemplate = {
        desktop: ["a a b", "c d d", "e f f"],
        tablet: ["a a b", "c d d", "e f f"],
        mobile: ["a", "b", "c", "d", "e", "f"],
    },
}) {
    const [gridTemplate, setGridTemplate] = useState(initialTemplate);

    const updateGridTemplate = (newTemplate) => {
        setGridTemplate(newTemplate);
    };

    const getAreaStyles = (area) => {
        return `grid-area: ${area};`;
    };

    return (
        <BentoGridContext.Provider value={{ gridTemplate, updateGridTemplate, getAreaStyles }}>
            {children}
        </BentoGridContext.Provider>
    );
}




export function BentoGrid({ children, className, gap = 4 }) {
    const { gridTemplate } = useBentoGrid();

    // Create CSS custom properties for each layout
    const cssVariables = {
        "--desktop-rows": `repeat(${gridTemplate.desktop.length}, minmax(128px, auto))`,
        "--desktop-columns": `repeat(${gridTemplate.desktop[0].split(" ").length}, 1fr)`,
        "--desktop-areas": `"${gridTemplate.desktop.join('" "')}"`,

        "--tablet-rows": gridTemplate.tablet
            ? `repeat(${gridTemplate.tablet.length}, minmax(128px, auto))`
            : `repeat(${gridTemplate.desktop.length}, minmax(128px, auto))`,
        "--tablet-columns": gridTemplate.tablet
            ? `repeat(${gridTemplate.tablet[0].split(" ").length}, 1fr)`
            : `repeat(${gridTemplate.desktop[0].split(" ").length}, 1fr)`,
        "--tablet-areas": gridTemplate.tablet
            ? `"${gridTemplate.tablet.join('" "')}"`
            : `"${gridTemplate.desktop.join('" "')}"`,

        "--mobile-rows": gridTemplate.mobile
            ? `repeat(${gridTemplate.mobile.length}, minmax(128px, auto))`
            : "repeat(6, minmax(128px, auto))",
        "--mobile-columns": gridTemplate.mobile ? `repeat(${gridTemplate.mobile[0].split(" ").length}, 1fr)` : "1fr",
        "--mobile-areas": gridTemplate.mobile ? `"${gridTemplate.mobile.join('" "')}"` : `"a" "b" "c" "d" "e" "f"`,

        "--grid-gap": `${gap * 0.25}rem`,
    };

    return (
        <div className={cn("bento-grid", className)} style={cssVariables}>
            {children}
        </div>
    );
}

export function BentoGridContainer({ children, ...props }) {
    return (
        <BentoGridProvider initialTemplate={props.initialTemplate}>
            <BentoGrid {...props}>{children}</BentoGrid>
        </BentoGridProvider>
    );
}

export function BentoGridItem({ area, children, className, title, description }) {
    const { getAreaStyles:_ } = useBentoGrid();

    return (
        <Card
            className={cn(
                "overflow-hidden rounded-xl border bg-secondary p-4 transition-all hover:shadow-md",
                className
            )}
            style={{ gridArea: area }}
        >
            {(title || description) && (
                <div className="mb-2">
                    {title && <h3 className="text-lg font-semibold">{title}</h3>}
                    {description && <p className="text-sm text-muted-foreground">{description}</p>}
                </div>
            )}
            <div className="h-full w-full">{children}</div>
        </Card>
    );
}
