import { ExternalLink } from "#/components/external-link";
import { type ThemeMode, useThemeMode } from "#/components/providers/theme-provider";
import { NativeSelect, NativeSelectOption } from "#/components/ui/native-select";
import { footer } from "#/data/portfolio/footer";
export function Footer() {
    const { mode, setMode } = useThemeMode();
    return (
        <footer className="relative z-10">
            <div className="mask-t-from-0% mask-t-to-80% bg-primary/20 -z-10 absolute inset-0 -top-40"></div>

            <div className="mx-auto max-w-5xl px-4 pb-10 z-10">
                <div className="mt-10">
                    <p className="font-heading text-2xl">{footer.name}</p>
                    <p className="mt-1 text-sm italic text-mist-500">{footer.tagline}</p>
                    <p className="mt-4 text-xs text-mist-400">© {new Date().getFullYear()} {footer.name}</p>
                </div>
                <div className="my-6"></div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-mist-700">
                    <ExternalLink href={footer.links.github}>GitHub ↗</ExternalLink>
                    <ExternalLink href={footer.links.linkedin}>LinkedIn ↗</ExternalLink>
                    <a href={`mailto:${footer.links.email}`}>Email ↗</a>
                    <a href={footer.links.resume} download>
                        Resume ⤓
                    </a>
                    <span>|</span>
                    <a href={footer.links.sitemap} className="ml-auto">
                        Sitemap
                    </a>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-mist-500">
                    <div className="flex items-center gap-1">
                        <label htmlFor="theme-select" className="text-mist-700">
                            Theme
                        </label>
                        <NativeSelect
                            id="theme-select"
                            size="xs"
                            variant="ghost"
                            value={mode}
                            onChange={(e) => setMode(e.target.value as ThemeMode)}
                        >
                            <NativeSelectOption value="light">Light</NativeSelectOption>
                            <NativeSelectOption value="dark">Dark</NativeSelectOption>
                            <NativeSelectOption value="auto">System</NativeSelectOption>
                        </NativeSelect>
                    </div>
                </div>
            </div>
        </footer>
    );
}
