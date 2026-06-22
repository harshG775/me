import { useTypstSvg } from "#/lib/typst/useTypstSvg"
import { ClientOnly, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/resume/")({
    ssr: false,
    component: RouteComponent,
})

function RouteComponent() {
    const source = `
#let resume-data = (
    profile: (
        name: "Harsh Gaur",
        role: "Frontend Engineer | React, Next.js, TanStack, TypeScript | SaaS Platforms",
        location: "Delhi, India",
        email: (label: "hgaur491@gmail.com", link: "mailto:hgaur491@gmail.com"),
        phone: (label: "(+91) 9310745921", link: "tel:+919310745921"),
        links: (
            (label: "harshgaur.in", link: "https://harshgaur.in"),
            (label: "github.com/harshG775", link: "https://github.com/harshG775"),
            (label: "linkedin.com/in/harshg775", link: "https://linkedin.com/in/harshg775"),
        ),
    ),
    summary: "Frontend Engineer specializing in multi-tenant SaaS architecture and real-time AI integrations - building scalable, high-performance web applications that reduce development overhead and streamline user experience for growing businesses.",
    skills: (
        (label: "Languages", item: ("TypeScript", "JavaScript (ES2022+)", "Python")),
        (
            label: "Frontend",
            item: (
                "React.js",
                "Next.js",
                "TanStack (Query, Router, Start, Form)",
                "Zustand",
                "Tailwind CSS",
                "ShadCN UI",
            ),
        ),
        (label: "Backend & AI", item: ("Node.js", "Express.js", "Flask", "OpenAI API", "REST/WebSockets")),
        (label: "Data & Tools", item: ("PostgreSQL", "MongoDB", "Drizzle ORM", "Better Auth", "Docker", "Git")),
    ),
    experience: (
        (
            company: "Prabhubhakti Pvt. Ltd.",
            role: "Frontend Engineer",
            location: "Gurugram",
            start: "Jun 2025",
            end: "Present",
            bullets: (
                "Architected three multi-tenant SaaS platforms (Astrologer, Temple Management, Ebook) with domain/subdomain-based tenant isolation, per-tenant UI theming, and Next.js middleware routing.",
                "Built reusable React/TypeScript components for booking and payment flows, integrating a unified payment gateway (prabhubhakti.io) via Phonepe across all tenant platforms - reducing per-tenant integration time by ~70%.",
                "Standardized tenant onboarding templates in Next.js with TanStack Router, enabling rapid feature rollout across tenants.",
            ),
        ),
        (
            company: "Metis Eduventures Pvt. Ltd. (Adda247)",
            role: "Frontend Engineer (SDE Trainee)",
            location: "Gurugram",
            start: "Aug 2024",
            end: "Feb 2025",
            bullets: (
                "Built SupportDesk, an AI customer support platform with real-time agent-to-human handover using WebSockets and OpenAI API integration, eliminating third-party tooling and saving ~2L/year.",
                "Developed AIDoubtSolver, an academic AI chatbot with voice-to-voice chat using Whisper API, browser Camera API, and real-time streaming responses via SSE, supporting 150+ concurrent users with optimized state management and minimal re-renders.",
                "Improved application performance by ~25% through bundle analysis, route-based code splitting, and memoization strategies.",
            ),
        ),
        (
            company: "ItaxEasy",
            role: "Frontend Developer Internship",
            location: "Gwalior (Remote)",
            start: "Nov 2023",
            end: "May 2024",
            bullets: (
                "Migrated legacy tax-filing platform from React.js to Next.js App Router, enabling SSR for improved SEO and faster content delivery.",
                "Optimized performance through route-based code splitting and lazy loading strategies.",
            ),
        ),
    ),
    projects: (
        (
            name: "Resume Builder Platform",
            tech: "TanStack Start, Typst (WASM), TanStack Form, Zod, dnd-kit, Tiptap",
            bullets: (
                "Designed a resume system with React, TanStack Form, and Zod schema validation, supporting dynamic section reordering via drag-and-drop (@dnd-kit/react).",
                "Integrated Tiptap rich text editor with CSS-scoped styling for WYSIWYG content editing across templates.",
            ),
        ),
        (
            name: "Multi-Tenant Architecture Boilerplate",
            tech: "TanStack Start, TanStack Router, TypeScript, Tailwind CSS",
            bullets: (
                "Built an open-source proof-of-concept for multi-tenant web applications featuring domain-based routing isolation.",
                "Implemented advanced full-stack TypeScript workflows and state-management patterns using the latest TanStack ecosystem.",
            ),
        ),
    ),
    education: (
        (
            degree: "Master of Computer Applications (MCA)",
            school: "Indira Gandhi National Open University (IGNOU)",
            start: "2026",
            end: "Ongoing",
        ),
        (
            degree: "Bachelor of Arts (English Honours)",
            school: "Prof. Rajendra Singh University",
            start: "2020",
            end: "2023",
        ),
    ),
)



#set document(author: resume-data.profile.name, title: resume-data.profile.name)
#set page(margin: 0.25in, paper: "us-letter")

// ── MINIMALIST COLOR PALETTE ─────────────────────────────────────────────────
// ── REFINED NAVY ACCENT ──────────────────────────────────────────────────────
#let color-heading = rgb("#1e3a8a") // Distinct but dark navy
#let color-text = rgb("#111827")    // Crisp off-black
#let color-muted = rgb("#4b5563")   // Neutral mid-gray

#let font-serif = "Georgia"
#let font-sans = "Arial"

#set text(font: font-sans, size: 9.8pt, fill: color-text)
#set par(leading: 0.6em)

// ── heading rules ────────────────────────────────────────────────────────────
// h1 → Main Name
#show heading.where(level: 1): it => block(below: 6pt)[
    #set text(font: font-serif, size: 26pt, weight: 800, fill: color-heading)
    #it.body
]

// h2 → Core Sections (Summary, Experience, etc.)
#show heading.where(level: 2): it => block(above: 8pt)[
    #pad(top: 0.6em, bottom: -8pt)[ #text(font: font-serif, weight: 800, fill: color-heading)[#upper(it.body)] ]
    #line(length: 100%, stroke: 0.5pt)
    #v(-2pt)
]

// h3 → Sub-items (Job Roles, Project Names, Degrees)
#show heading.where(level: 3): it => [
    #set text(size: 9.8pt, weight: 700, fill: color-text)
    #block(width: 100%, it.body)
]

// ── helpers ───────────────────────────────────────────────────────────────────
#let date-range(s, e) = text(fill: color-muted, weight: 400)[#s - #e]

// ── HEADER ────────────────────────────────────────────────────────────────────
= #resume-data.profile.name
#text(size: 11pt, weight: 600)[#resume-data.profile.role] \
#v(-2pt)
#text(fill: color-text)[
    #link(resume-data.profile.email.link)[#resume-data.profile.email.label] #text(fill: color-muted)[ | ]
    #link(resume-data.profile.phone.link)[#resume-data.profile.phone.label] #text(fill: color-muted)[ | ]
    #resume-data.profile.location
    #for (i, item) in resume-data.profile.links.enumerate() [
        #text(fill: color-muted)[ | ]
        #link(item.link)[#underline(stroke: 0.5pt + color-muted, evade: true)[#text(fill: color-muted)[#item.label]]]
    ]
]


// ── SUMMARY ───────────────────────────────────────────────────────────────────
== Summary

#resume-data.summary

// ── SKILLS ───────────────────────────────────────────────────────────────────
== Skills

#table(
    columns: (auto, 1fr),
    stroke: none,
    inset: (x: 0pt, y: 3pt),
    column-gutter: 10pt,
    ..resume-data
        .skills
        .map(group => (
            text(fill: color-text, weight: 700)[#group.label:],
            group.item.join(", "),
        ))
        .flatten()
)

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
== Experience

#for job in resume-data.experience [
    #block(breakable: false, width: 100%)[
        === #job.role #h(1fr) #date-range(job.start, job.end)
        #text(fill: color-text)[#job.company] #text(fill: color-muted)[| #text(style: "italic")[#job.location]]
        #list(..job.bullets)
    ]
    #v(0.4em)
]

// ── PROJECTS ──────────────────────────────────────────────────────────────────
== Projects

#for proj in resume-data.projects [
    #block(breakable: false, width: 100%)[
        === #proj.name #if "link" in proj [ #h(1fr) #text(size: 8.5pt, weight: 400)[#link(
                proj.link.url,
            )[#proj.link.label]] ]
        #text(fill: color-muted, style: "italic")[#proj.tech]
        #list(..proj.bullets)
    ]
    #v(0.4em)
]

// ── EDUCATION ─────────────────────────────────────────────────────────────────
== Education

#for edu in resume-data.education [
    #block(breakable: false, width: 100%)[
        === #edu.degree #h(1fr) #date-range(edu.start, edu.end)
        #text(fill: color-muted, style: "italic")[#edu.school]
    ]
    #v(0.4em)
]


    
`

    const { svg, error } = useTypstSvg(source)
    if (error) return <pre className="text-sm text-red-500">{error}</pre>
    return (
        <div className="p-8">
            <ClientOnly fallback={<div>Loading preview…</div>}>
                <div dangerouslySetInnerHTML={{ __html: svg }} />{" "}
            </ClientOnly>
        </div>
    )
}
