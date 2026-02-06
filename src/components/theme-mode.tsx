import { motion as M } from "motion/react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./contexts/theme-provider"

export default function ThemeMode() {
    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

    const toggleTheme = () => setTheme(isDark ? "light" : "dark")

    return (
        <div
            onClick={toggleTheme}
            className={`
        relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer
        ${isDark ? "bg-slate-800" : "bg-blue-100"}
        transition-colors duration-300
      `}
        >
            <M.div
                className="z-10 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                layout
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30,
                }}
                animate={{
                    x: isDark ? 32 : 0,
                }}
            >
                <M.div
                    key={theme}
                    initial={{ y: -10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                >
                    {isDark ? (
                        <Moon size={14} className="text-slate-800" fill="currentColor" />
                    ) : (
                        <Sun size={14} className="text-amber-500" fill="currentColor" />
                    )}
                </M.div>
            </M.div>

            <div className="absolute flex justify-between w-full px-2 text-xs">
                <Sun size={12} className={`${isDark ? "text-slate-600" : "opacity-0"}`} />
                <Moon size={12} className={`${!isDark ? "text-blue-400" : "opacity-0"}`} />
            </div>
        </div>
    )
}
