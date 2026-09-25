export type WorkRow = {
    index: string;
    category: string;
    title: string;
    description: string;
    result?: string;
    detail?: string;
    stack?: string;
    href?: string;
};

export const featuredWork: WorkRow = {
    index: "01",
    category: "Professional",
    title: "Prabhubhakti multi-tenant platforms",
    description:
        "Three SaaS products (astrologer, temple management, ebook) on a shared multi-tenant architecture.",
    detail: "Each new client needed their own branded site, domain, and payment flow, and building each from scratch was slow.",
    result: "30+ live tenants, 2,000+ end users, tenant onboarding time down 70%.",
    stack: "Next.js · TanStack Start · TypeScript · Tailwind · PhonePe",
};

export const moreWork: WorkRow[] = [
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
