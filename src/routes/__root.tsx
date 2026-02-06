import { TanStackDevtools } from "@tanstack/react-devtools"
import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"

import appCss from "../styles.css?url"

import type { QueryClient } from "@tanstack/react-query"
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools"
import { ThemeProvider } from "@/components/contexts/theme-provider"
import { getThemeServerFn } from "@/lib/server-fn/theme"
import ThemeMode from "@/components/theme-mode"
import { cn } from "@/lib/utils"

interface MyRouterContext {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    loader: async () => {
        const theme = await getThemeServerFn()
        return { host: "www.harshgaur.in", theme }
    },
    head: ({ loaderData }) => {
        const title = "Harsh Gaur — Frontend Engineer | React, Next.js, TypeScript"

        const description =
            "Portfolio of Harsh Gaur, a Frontend Engineer with 2+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, and TanStack."

        const image = `${loaderData?.host}/logo.png`

        const url = `${loaderData?.host}`

        return {
            meta: [
                {
                    charSet: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                // SEO
                { title: title },
                { name: "description", content: description },
                {
                    name: "keywords",
                    content: "movies, tv shows, streaming, watch online, latest movies, series, OnyxStream",
                },

                // Open Graph
                { property: "og:type", content: "website" },
                { property: "og:title", content: title },
                { property: "og:description", content: description },
                { property: "og:image", content: image },
                { property: "og:url", content: url },

                // Twitter
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: title },
                { name: "twitter:description", content: description },
                { name: "twitter:image", content: image },
                { name: "twitter:url", content: url },
            ],
            links: [
                {
                    rel: "stylesheet",
                    href: appCss,
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
                    <div className="fixed bottom-6 right-6 z-50">
                        <ThemeMode />
                    </div>
                </ThemeProvider>
                <TanStackDevtools
                    config={{
                        position: "bottom-left",
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
