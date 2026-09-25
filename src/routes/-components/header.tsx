import { header } from "#/data/portfolio/header";

export function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 p-2">
            <header className="mx-auto w-full max-w-5xl h-10 flex items-center justify-between gap-2">
                <a href={header.logo.href}>
                    <img src={header.logo.src} alt={header.logo.alt} className="size-10" />
                </a>
                <nav aria-label="Primary" className="h-full flex justify-center">
                    {header.nav.map((item, index) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={
                                index === 0
                                    ? "bg-mist-50 h-full content-center px-2.5 font-medium text-mist-700"
                                    : "h-full content-center px-2.5 font-medium text-mist-700"
                            }
                        >
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>
                <div>---</div>
            </header>
        </div>
    );
}
