import { ExternalLink } from "#/components/external-link";
import { type ThemeMode, useThemeMode } from "#/components/providers/theme-provider";
import { Button } from "#/components/ui/button";
import { footer } from "#/data/portfolio/footer";

const themeOptions: { mode: ThemeMode; label: string }[] = [
    { mode: "light", label: "Light" },
    { mode: "dark", label: "Dark" },
    { mode: "auto", label: "System" },
];

export function Footer() {
    const { mode, setMode } = useThemeMode();
    return (
        <footer className="relative z-10">
            <div className="mask-t-from-90% mask-t-to-100% bg-primary/5 -z-10 absolute inset-0 -top-10"></div>

            <div className="mx-auto max-w-5xl px-4 pb-10 z-10">
                <div className="mt-10">
                    <p className="font-heading text-lg">{footer.name}</p>
                    <p className="mt-1 text-sm italic text-muted-foreground">{footer.tagline}</p>
                    <p className="mt-4 text-xs text-muted-foreground">
                        © {new Date().getFullYear()} {footer.name}
                    </p>
                </div>
                <div className="my-6"></div>
                <div className="mt-4 flex justify-center flex-wrap gap-x-4 gap-y-2 text-sm">
                    <ExternalLink href={footer.links.github}>GitHub ↗</ExternalLink>
                    <ExternalLink href={footer.links.linkedin}>LinkedIn ↗</ExternalLink>
                    <a href={`mailto:${footer.links.email}`}>Email ↗</a>
                    <a href={footer.links.resume} download>
                        Resume ⤓
                    </a>
                    <a href={footer.links.sitemap} className="ml-auto">
                        Sitemap
                    </a>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <span >Theme</span>
                        {themeOptions.map((option, i) => (
                            <div key={option.mode} className="flex items-center">
                                {i > 0 && <span aria-hidden="true">·</span>}
                                <Button
                                    variant={mode === option.mode ? "outline" : "ghost"}
                                    size={"xs"}
                                    onClick={() => setMode(option.mode)}
                                >
                                    {option.label}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
