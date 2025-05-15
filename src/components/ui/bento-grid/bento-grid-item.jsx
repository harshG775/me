import { useBentoGrid } from "./bento-grid-context";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export function BentoGridItem({ area, children, className, title, description }) {
    const { getAreaStyles: _ } = useBentoGrid();

    return (
        <Card
            className={cn(
                "overflow-hidden rounded-xl border bg-background p-4 transition-all hover:shadow-md",
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
