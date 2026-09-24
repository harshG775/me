import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "auto";

function getInitialMode(fallback: ThemeMode): ThemeMode {
    if (typeof window === "undefined") {
        return fallback;
    }

    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark" || stored === "auto") {
        return stored;
    }

    return fallback;
}

function applyThemeMode(mode: ThemeMode) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(resolved);

    if (mode === "auto") {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", mode);
    }

    document.documentElement.style.colorScheme = resolved;
}

type ThemeContextValue = {
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children, defaultMode = "auto" }: { children: ReactNode; defaultMode?: ThemeMode }) {
    const [mode, setModeState] = useState<ThemeMode>(defaultMode);

    // biome-ignore lint/correctness/useExhaustiveDependencies: only the mount-time defaultMode should seed this
    useEffect(() => {
        const initialMode = getInitialMode(defaultMode);
        setModeState(initialMode);
        applyThemeMode(initialMode);
    }, []);

    useEffect(() => {
        if (mode !== "auto") {
            return;
        }

        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => applyThemeMode("auto");

        media.addEventListener("change", onChange);
        return () => {
            media.removeEventListener("change", onChange);
        };
    }, [mode]);

    function setMode(nextMode: ThemeMode) {
        setModeState(nextMode);
        applyThemeMode(nextMode);
        window.localStorage.setItem("theme", nextMode);
    }

    return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
}

export function useThemeMode() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useThemeMode must be used within a ThemeProvider");
    }
    return ctx;
}
