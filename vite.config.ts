import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"

import { tanstackStart } from "@tanstack/react-start/plugin/vite"

import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react"
import babel from "@rolldown/plugin-babel"
import tailwindcss from "@tailwindcss/vite"
import { nitro } from "nitro/vite"

const TYPST_PACKAGES = [
    "@myriaddreamin/typst.ts",
    "@myriaddreamin/typst-ts-web-compiler",
    "@myriaddreamin/typst-ts-renderer",
]
const config = defineConfig({
    resolve: { tsconfigPaths: true },
    plugins: [
        devtools(),
        nitro({ rollupConfig: { external: [/^@sentry\//] } }),
        tailwindcss(),
        tanstackStart(),
        viteReact(),
        babel({ presets: [reactCompilerPreset()] }),
    ],
    optimizeDeps: {
        exclude: TYPST_PACKAGES,
    },
    ssr: {
        noExternal: TYPST_PACKAGES,
    },
})

export default config
