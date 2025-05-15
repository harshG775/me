import { useBentoGrid, BentoGridProvider } from "./bento-grid-context";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

export function BentoGrid({ children, className, gap = 4 }) {
    const { gridTemplate } = useBentoGrid();
    const isTablet = useMediaQuery("(max-width: 1024px) and (min-width: 768px)");
    const isMobile = useMediaQuery("(max-width: 767px)");

    let templateRows;
    let templateColumns;
    let areas;

    if (isMobile && gridTemplate.mobile) {
        templateRows = `repeat(${gridTemplate.mobile.length}, minmax(180px, auto))`;
        templateColumns = "1fr";
        areas = `"${gridTemplate.mobile.join('" "')}"`;
    } else if (isTablet && gridTemplate.tablet) {
        templateRows = `repeat(${gridTemplate.tablet.length}, minmax(180px, auto))`;
        templateColumns = `repeat(${gridTemplate.tablet[0].split(" ").length}, 1fr)`;
        areas = `"${gridTemplate.tablet.join('" "')}"`;
    } else {
        templateRows = `repeat(${gridTemplate.desktop.length}, minmax(180px, auto))`;
        templateColumns = `repeat(${gridTemplate.desktop[0].split(" ").length}, 1fr)`;
        areas = `"${gridTemplate.desktop.join('" "')}"`;
    }

    return (
        <div
            className={cn("grid w-full", className)}
            style={{
                gridTemplateAreas: areas,
                gridTemplateRows: templateRows,
                gridTemplateColumns: templateColumns,
                gap: `${gap * 0.25}rem`,
            }}
        >
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
