import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import appCss from "../styles.css?url"
import type { QueryClient } from "@tanstack/react-query"
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools"
import { ThemeProvider } from "@/components/contexts/theme-provider"
import { cn } from "@/lib/utils"
import { getThemeServerFn } from "@/lib/server-fn/theme"
import ThemeMode from "@/components/ui/theme-mode"
import { seo } from "@/lib/seo"

interface MyRouterContext {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    loader: async () => {
        const theme = await getThemeServerFn()
        return { host: "https://www.harshgaur.in", theme: theme || "dark" }
    },
    notFoundComponent: () => (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold">404</h1>
            <p>Page not found</p>
        </div>
    ),
    head: ({ loaderData }) => {
        const title = "Harsh Gaur — Frontend Engineer | React, Next.js, TypeScript"

        const description =
            "Portfolio of Harsh Gaur, a Frontend Engineer with 2+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, and TanStack."

        const url = loaderData?.host
        const image = `${url}/logo-with-bg.png`
        const twitterHandle = "@Harsh_G775"
        return {
            meta: [
                {
                    charSet: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                ...seo({
                    title: title,
                    description: description,
                    keywords: "frontend engineer, react developer, typescript, portfolio",
                    url: url,
                    image: image,
                    twitterHandle: twitterHandle,
                }),
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
    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
    const { theme } = Route.useLoaderData()

    return (
        <html lang="en" className={cn("scroll-smooth", theme)} suppressHydrationWarning>
            <head>
                <HeadContent />
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    {children}
                    <div className="fixed bottom-4 right-4">
                        <ThemeMode />
                    </div>
                </ThemeProvider>
                <TanStackDevtools
                    config={{
                        position: "bottom-right",
                    }}
                    plugins={[
                        {
                            name: "Tanstack Router",
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                        TanStackQueryDevtools,
                    ]}
                />
                <Scripts />
            </body>
        </html>
    )
}
