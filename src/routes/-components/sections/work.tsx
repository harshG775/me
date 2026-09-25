import { ExternalLink } from "#/components/external-link";
import { featuredWork, moreWork, type WorkRow } from "#/data/portfolio/work";

export function Work() {
    return (
        <section id="work" aria-labelledby="work-heading" className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
            <p className="text-xs font-normal tracking-widest text-muted-foreground uppercase">01</p>
            <h2 id="work-heading" className="mt-1 text-3xl font-bold lg:text-4xl">
                Featured work
            </h2>

            <article className="mt-12 lg:mt-16">
                <span className="inline-flex rounded-full border border-border bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest text-primary uppercase">
                    {featuredWork.category}
                </span>
                <h3 className="mt-3 text-2xl font-bold lg:text-3xl">{featuredWork.title}</h3>
                <p className="mt-3 text-base text-muted-foreground lg:text-lg">{featuredWork.description}</p>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-t border-border pt-3">
                        <p className="text-xs text-muted-foreground">Problem</p>
                        <p className="mt-1.5 text-sm text-foreground">{featuredWork.detail}</p>
                    </div>
                    <div className="border-t border-primary pt-3">
                        <p className="text-xs text-muted-foreground">Result</p>
                        <p className="mt-1.5 text-base font-semibold text-primary">{featuredWork.result}</p>
                    </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">{featuredWork.stack}</p>
            </article>

            <div className="mt-16 lg:mt-20">
                <p className="text-xs font-normal tracking-widest text-muted-foreground uppercase">More work</p>
                <ul className="mt-4 border-b border-border">
                    {moreWork.map((item) => (
                        <li key={item.title} className="border-t border-border py-6">
                            {item.href ? (
                                <ExternalLink href={item.href} className="group flex items-start gap-4 sm:gap-6">
                                    <WorkRowContent item={item} />
                                </ExternalLink>
                            ) : (
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <WorkRowContent item={item} />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function WorkRowContent({ item }: { item: WorkRow }) {
    return (
        <>
            <span className="shrink-0 pt-0.5 font-mono text-xs text-muted-foreground">{item.index}</span>
            <div className="min-w-0 flex-1">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{item.category}</p>
                <h3 className="mt-1.5 text-lg font-bold sm:text-xl">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
                {item.result && <p className="mt-2 text-sm font-semibold">{item.result}</p>}
                {item.detail && <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>}
                {item.stack && <p className="mt-2 text-xs text-muted-foreground">{item.stack}</p>}
            </div>
            {item.href && (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-foreground">
                    {item.href.includes("github") ? "↗" : "→"}
                </span>
            )}
        </>
    );
}
