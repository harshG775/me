import { cn } from "cn";
import { useEffect, useLayoutEffect, ViewTransition } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "#/components/icons/close-icon";

type ImagePopupProps = {
    src: string;
    alt: string;
    name: string;
    onClose: () => void;
};

export function ImagePopup({ src, alt, name, onClose }: ImagePopupProps) {
    // Runs before paint so the scrollbar-width compensation is already in
    // place when the view transition captures its "after" snapshot -
    // otherwise the reflow from the vanishing scrollbar shifts the image
    // mid-animation.
    useLayoutEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;
        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPaddingRight;
        };
    }, []);

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onClose();
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    return createPortal(
        // biome-ignore lint/a11y/useKeyWithClickEvents: closing on Escape is handled globally above
        <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className={cn("fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm")}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-mist-100 text-mist-700 text-lg hover:bg-primary/10 hover:text-mist-900"
            >
                <CloseIcon />
            </button>
            <ViewTransition name={name}>
                <img src={src} alt={alt} className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl" />
            </ViewTransition>
        </div>,
        document.body,
    );
}
