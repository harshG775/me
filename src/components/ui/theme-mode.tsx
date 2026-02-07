import { motion as M } from "motion/react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/contexts/theme-provider"
import { cn } from "@/lib/utils"
import React from "react"

export default function ThemeMode(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
                `
                relative w-16 h-8 rounded-full p-1
                flex items-center cursor-pointer
                transition-colors duration-200
                ${isDark ? "bg-slate-800" : "bg-blue-100"}
            `,
                props.className,
            )}
            {...props}
        >
            {/* Knob */}
            <M.div
                className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                animate={{ x: isDark ? 32 : 0 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 28,
                }}
            >
                {isDark ? <Moon size={14} className="text-slate-800" /> : <Sun size={14} className="text-amber-500" />}
            </M.div>

            {/* Background icons */}
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <Sun className={`size-4 transition-opacity ${isDark ? "opacity-30" : "opacity-100"}`} />
                <Moon className={`size-4 transition-opacity ${isDark ? "opacity-100" : "opacity-30"}`} />
            </div>
        </button>
    )
}
