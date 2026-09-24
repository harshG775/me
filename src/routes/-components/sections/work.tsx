import { ExternalLink } from "#/components/external-link";

type WorkRow = {
    index: string;
    category: string;
    title: string;
    description: string;
    result?: string;
    detail?: string;
    stack?: string;
    href?: string;
};

const moreWork: WorkRow[] = [
    {
        index: "02",
        category: "Professional",
        title: "SupportDesk",
        description: "AI-powered customer support platform with live handover to human agents.",
        result: "Replaced the vendor, saving ₹2L per year.",
        stack: "React · WebSockets · OpenAI API · Zustand",
    },
    {
        index: "03",
        category: "Personal",
        title: "Anchor resume builder",
        description: "A browser-based resume builder with live PDF preview, no server rendering.",
        result: "Instant PDF generation entirely in the browser.",
        stack: "TanStack Start · Typst WASM · Zod · Tiptap · dnd-kit",
        href: "https://anchor.harshgaur.in",
    },
    {
        index: "04",
        category: "Open source",
        title: "Multi-tenant SaaS starter",
        description: "A public proof of concept for domain-based tenancy in TanStack Start.",
        detail: "Tenant resolution, isolated routing, per-tenant themes.",
        href: "https://github.com/harshG775/multi-tenant-saas",
    },
];

export function Work() {
    return (
        <section id="work" aria-labelledby="work-heading" className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
            <p className="text-xs font-normal tracking-widest text-mist-400 uppercase">01</p>
            <h2 id="work-heading" className="mt-1 text-3xl font-bold lg:text-4xl">
                Featured work
            </h2>

            <article className="mt-12 lg:mt-16">
                <p className="text-xs font-medium tracking-widest text-mist-400 uppercase">Professional</p>
                <h3 className="mt-3 text-2xl font-bold lg:text-3xl">Prabhubhakti multi-tenant platforms</h3>
                <p className="mt-3 text-base text-mist-700 lg:text-lg">
                    Three SaaS products (astrologer, temple management, ebook) on a shared multi-tenant architecture.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="border-t border-mist-200 pt-3">
                        <p className="text-xs text-mist-500">Problem</p>
                        <p className="mt-1.5 text-sm text-mist-800">
                            Each new client needed their own branded site, domain, and payment flow, and building each
                            from scratch was slow.
                        </p>
                    </div>
                    <div className="border-t border-foreground pt-3">
                        <p className="text-xs text-mist-500">Result</p>
                        <p className="mt-1.5 text-base font-semibold">
                            30+ live tenants, 2,000+ end users, tenant onboarding time down 70%.
                        </p>
                    </div>
                </div>
                <p className="mt-6 text-sm text-mist-500">Next.js · TanStack Start · TypeScript · Tailwind · PhonePe</p>
            </article>

            <div className="mt-16 lg:mt-20">
                <p className="text-xs font-normal tracking-widest text-mist-400 uppercase">More work</p>
                <ul className="mt-4 border-b border-mist-200">
                    {moreWork.map((item) => (
                        <li key={item.title} className="border-t border-mist-200 py-6">
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
            <span className="shrink-0 pt-0.5 font-mono text-xs text-mist-400">{item.index}</span>
            <div className="min-w-0 flex-1">
                <p className="text-xs font-medium tracking-widest text-mist-400 uppercase">{item.category}</p>
                <h3 className="mt-1.5 text-lg font-bold sm:text-xl">{item.title}</h3>
                <p className="mt-1.5 text-sm text-mist-700">{item.description}</p>
                {item.result && <p className="mt-2 text-sm font-semibold">{item.result}</p>}
                {item.detail && <p className="mt-2 text-sm text-mist-500">{item.detail}</p>}
                {item.stack && <p className="mt-2 text-xs text-mist-500">{item.stack}</p>}
            </div>
            {item.href && (
                <span className="shrink-0 pt-0.5 text-lg text-mist-400 transition-colors group-hover:text-foreground">
                    {item.href.includes("github") ? "↗" : "→"}
                </span>
            )}
        </>
    );
}
