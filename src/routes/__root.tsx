import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

interface MyRouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
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
        scripts: [
            {
                children: THEME_INIT_SCRIPT,
            },
        ],
    }),
    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <div className="fixed top-0 left-0 right-0 p-2">
                    <header className="mx-auto w-full max-w-5xl h-10 flex items-center justify-between gap-2">
                        <a href="#top">
                            <img src="/logo.svg" alt="portfolio logo" className="size-10" />
                        </a>
                        <nav aria-label="Primary" className="h-full flex justify-center">
                            <a
                                href="#work"
                                className="bg-mist-50 h-full content-center px-2.5 font-medium text-mist-700"
                            >
                                <span>Work</span>
                            </a>
                            <a href="#experience" className="h-full content-center px-2.5 font-medium text-mist-700">
                                <span>Experience</span>
                            </a>
                            <a href="#about" className="h-full content-center px-2.5 font-medium text-mist-700">
                                <span>About</span>
                            </a>
                            <a href="#skills" className="h-full content-center px-2.5 font-medium text-mist-700">
                                <span>Skills</span>
                            </a>
                            <a href="#contact" className="h-full content-center px-2.5 font-medium text-mist-700">
                                <span>Contact</span>
                            </a>
                        </nav>
                        <div>---</div>
                    </header>
                </div>
                <div className="pt-12">{children}</div>
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
    );
}
