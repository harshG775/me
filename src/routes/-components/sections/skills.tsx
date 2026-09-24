const skills = [
    {
        label: "Front end",
        items: "React, Next.js, TypeScript, Tailwind CSS",
        usedIn: "Prabhubhakti platforms, SupportDesk",
    },
    {
        label: "React ecosystem",
        items: "TanStack Start, Router, Query, Form, Zustand",
        usedIn: "Prabhubhakti platforms, Anchor, SupportDesk",
    },
    {
        label: "Backend and data",
        items: "Node.js, Express, PostgreSQL, MongoDB, Drizzle ORM, Better Auth",
    },
    {
        label: "Real-time and AI",
        items: "WebSockets, SSE, OpenAI API, Whisper",
        usedIn: "SupportDesk, AI academic assistant",
    },
    {
        label: "Tools",
        items: "Git, GitHub, Docker",
    },
];

export function Skills() {
    return (
        <section id="skills" aria-labelledby="skills-heading" className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
            <p className="text-xs font-normal tracking-widest text-slate-400 uppercase">04</p>
            <h2 id="skills-heading" className="mt-1 text-3xl font-bold lg:text-4xl">
                Skills
            </h2>
            <hr className="mt-6 border-slate-200" />
            <dl className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
                {skills.slice(0, 2).map((group) => (
                    <SkillGroup key={group.label} group={group} />
                ))}
            </dl>
            <hr className="border-slate-200" />
            <dl className="grid grid-cols-1 gap-x-12 lg:grid-cols-3">
                {skills.slice(2).map((group) => (
                    <SkillGroup key={group.label} group={group} />
                ))}
            </dl>
        </section>
    );
}

function SkillGroup({ group }: { group: { label: string; items: string; usedIn?: string } }) {
    return (
        <div className="py-6 lg:py-8">
            <dt className="text-xs font-medium tracking-widest text-slate-400 uppercase">{group.label}</dt>
            <dd className="mt-2 text-xl font-bold lg:text-2xl">{group.items}</dd>
            {group.usedIn && <p className="mt-2 text-xs text-slate-500">Used in {group.usedIn}</p>}
        </div>
    );
}
