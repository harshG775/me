import { cn } from "cn";
import type * as React from "react";
import { ChevronDownIcon } from "#/components/icons/chevron-down-icon";

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
    size?: "xs" | "sm" | "default";
    variant?: "default" | "ghost";
};

const nativeSelectVariants = {
    default: "border border-input bg-transparent dark:bg-input/30 dark:hover:bg-input/50",
    ghost: "border border-transparent bg-transparent hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
};

function NativeSelect({ className, size = "default", variant = "default", ...props }: NativeSelectProps) {
    return (
        <div
            className={cn("group/native-select relative w-fit has-[select:disabled]:opacity-50", className)}
            data-slot="native-select-wrapper"
            data-size={size}
            data-variant={variant}
        >
            <select
                data-slot="native-select"
                data-size={size}
                data-variant={variant}
                className={cn(
                    "h-8 w-full min-w-0 appearance-none rounded-lg py-1 pr-8 pl-2.5 text-sm transition-colors outline-none select-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[size=sm]:py-0.5 data-[size=xs]:h-6 data-[size=xs]:rounded-[min(var(--radius-sm),8px)] data-[size=xs]:py-0 data-[size=xs]:pr-6 data-[size=xs]:pl-1.5 data-[size=xs]:text-xs dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
                    nativeSelectVariants[variant],
                )}
                {...props}
            />
            <ChevronDownIcon
                className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground select-none group-data-[size=xs]/native-select:right-1.5 group-data-[size=xs]/native-select:size-3"
                aria-hidden="true"
                data-slot="native-select-icon"
            />
        </div>
    );
}

function NativeSelectOption({ className, ...props }: React.ComponentProps<"option">) {
    return (
        <option
            data-slot="native-select-option"
            className={cn("bg-[Canvas] text-[CanvasText]", className)}
            {...props}
        />
    );
}

function NativeSelectOptGroup({ className, ...props }: React.ComponentProps<"optgroup">) {
    return (
        <optgroup
            data-slot="native-select-optgroup"
            className={cn("bg-[Canvas] text-[CanvasText]", className)}
            {...props}
        />
    );
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
