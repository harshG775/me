import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import appCss from "../styles.css?url"
import { TooltipProvider } from "#/components/ui/tooltip"
import { seo } from "#/lib/seo"

export const Route = createRootRoute({
    loader: async () => {
        return { host: "https://harshgaur.in", theme: "dark" }
    },
    head: ({ loaderData }) => {
        const appName = "Harsh Gaur"
        const title = "Harsh Gaur — Frontend Engineer | React, Next.js, TypeScript"
        const description =
            "Portfolio of Harsh Gaur, a Frontend Engineer with 2+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, and TanStack."

        const url = loaderData?.host
        const image = `${url}/logo.png`
        const twitterHandle = "@Harsh_G775"
        const themeColor = loaderData?.theme === "dark" ? "#171c23" : "#f8f9fa"
        return {
            meta: [
                {
                    charSet: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "theme-color",
                    content: themeColor,
                },
                ...seo({
                    title,
                    description,
                    keywords: "frontend engineer, react developer, typescript, portfolio",
                    url,
                    image,
                    twitterHandle,
                    appName: appName,
                }),
                {
                    name: "google-site-verification",
                    content: "googlee00a17c4f7c5d0b6.html",
                },
            ],
            links: [
                {
                    rel: "stylesheet",
                    href: appCss,
                },
                {
                    rel: "canonical",
                    href: url,
                },
                {
                    rel: "sitemap",
                    type: "application/xml",
                    href: "/sitemap.xml",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicons/favicon-96x96.png",
                    sizes: "96x96",
                },
                {
                    rel: "icon",
                    type: "image/svg+xml",
                    href: "/favicons/favicon.svg",
                },
                {
                    rel: "shortcut icon",
                    href: "/favicons/favicon.ico",
                },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/favicons/apple-touch-icon.png",
                },
                {
                    rel: "manifest",
                    href: "/favicons/site.webmanifest",
                },
            ],
        }
    },
    scripts() {
        const googleTagId = "G-RJ9WBTSDZF"
        return [
            { src: `https://www.googletagmanager.com/gtag/js?id=${googleTagId}`, async: true },
            {
                innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "${googleTagId}");
                `,
            },
            {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Harsh Gaur",
                    url: "https://harshgaur.in",
                    image: "https://harshgaur.in/profile.jpg",
                    jobTitle: "Frontend Engineer",
                    description: "Frontend Engineer specializing in React, Next.js, TypeScript, and TanStack.",
                    sameAs: ["https://www.linkedin.com/in/harshg775", "https://github.com/harshG775"],
                }),
            },
        ]
    },
    notFoundComponent: () => (
        <div className="min-h-screen grid place-items-center font-semibold text-2xl">404 — page not found</div>
    ),
    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <TooltipProvider>{children}</TooltipProvider>
                <TanStackDevtools
                    config={{
                        position: "bottom-right",
                    }}
                    plugins={[
                        {
                            name: "Tanstack Router",
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />
                <Scripts />
            </body>
        </html>
    )
}
