import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "auto";
export type AppTheme = "light" | "dark";

const STORAGE_KEY = "theme";

function isThemeMode(value: string | null): value is ThemeMode {
    return value === "light" || value === "dark" || value === "auto";
}

export function resolveAppTheme(mode: ThemeMode): AppTheme {
    if (mode !== "auto") {
        return mode;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyThemeMode(mode: ThemeMode): AppTheme {
    const resolved = resolveAppTheme(mode);

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolved);

    if (mode === "auto") {
        root.removeAttribute("data-theme");
    } else {
        root.setAttribute("data-theme", mode);
    }

    root.style.colorScheme = resolved;

    return resolved;
}

export function initTheme(fallback: ThemeMode): ThemeMode {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const mode = isThemeMode(stored) ? stored : fallback;
    applyThemeMode(mode);
    return mode;
}

export function getThemeInitScript(fallback: ThemeMode): string {
    return `(function () {
    try {
        var stored = window.localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
        var mode = stored === "light" || stored === "dark" || stored === "auto" ? stored : ${JSON.stringify(fallback)};
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;
        var root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(resolved);
        if (mode === "auto") {
            root.removeAttribute("data-theme");
        } else {
            root.setAttribute("data-theme", mode);
        }
        root.style.colorScheme = resolved;
    } catch (e) {}
})();`;
}

// --- React context -------------------------------------------------------

type ThemeContextValue = {
    mode: ThemeMode;
    appTheme: AppTheme;
    setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children, defaultMode = "auto" }: { children: ReactNode; defaultMode?: ThemeMode }) {
    const [mode, setModeState] = useState<ThemeMode>(() =>
        typeof window === "undefined" ? defaultMode : initTheme(defaultMode),
    );
    const [appTheme, setAppTheme] = useState<AppTheme>(() =>
        typeof window === "undefined" ? (defaultMode === "auto" ? "light" : defaultMode) : resolveAppTheme(mode),
    );

    // Re-resolve when the OS theme changes while mode === "auto".
    useEffect(() => {
        if (mode !== "auto") {
            return;
        }

        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => setAppTheme(applyThemeMode("auto"));

        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, [mode]);

    // Keep other open tabs in sync when the theme changes.
    useEffect(() => {
        function onStorage(e: StorageEvent) {
            if (e.key !== STORAGE_KEY || !isThemeMode(e.newValue)) {
                return;
            }
            setModeState(e.newValue);
            setAppTheme(applyThemeMode(e.newValue));
        }

        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    function setMode(nextMode: ThemeMode) {
        setModeState(nextMode);
        setAppTheme(applyThemeMode(nextMode));
        window.localStorage.setItem(STORAGE_KEY, nextMode);
    }

    return <ThemeContext.Provider value={{ mode, appTheme, setMode }}>{children}</ThemeContext.Provider>;
}

export function useThemeMode() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useThemeMode must be used within a ThemeProvider");
    }
    return ctx;
}
