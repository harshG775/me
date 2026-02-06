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
        return { theme }
    },
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "TanStack Start Starter",
            },
        ],
        links: [
            {
                rel: "stylesheet",
                href: appCss,
            },
        ],
    }),

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
