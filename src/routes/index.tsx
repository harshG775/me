import { createFileRoute } from "@tanstack/react-router"
import { Footer } from "./-components/footer/index.tsx"
import ContactSection from "./-components/sections/contact.tsx"
import ExperienceSection, { Experience } from "./-components/sections/experience.tsx"
import ProjectSection, { Project } from "./-components/sections/Project.tsx"
import IntroSection from "./-components/sections/intro.tsx"
import { Header } from "./-components/header/index.tsx"
import SkillsSection from "./-components/sections/skills.tsx"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

// https://www.sanidhyy.name/#contact
function RouteComponent() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex-1">
                <div
                    id={"home"}
                    className="relative flex min-h-[80dvh] items-center justify-center overflow-hidden px-6"
                >
                    <div className="h-24"></div>
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                        <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                    </div>
                    <IntroSection />
                </div>
                <div id={"experience"} className="mt-16 lg:mt-16 relative py-16">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                        <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                    </div>
                    <ExperienceSection experiences={experiences} />
                </div>
                <div id={"projects"} className="mt-16 lg:mt-16 relative py-16">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                        <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                    </div>
                    <ProjectSection projects={projects} />
                </div>
                <div id="skills" className="mt-16 lg:mt-16 relative py-16">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                        <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                    </div>
                    <SkillsSection />
                </div>
                <div id={"contact"} className="mt-16 lg:mt-16 relative py-16">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                        <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
                    </div>
                    <ContactSection />
                </div>
                <Footer />
            </main>
        </div>
    )
}

const experiences: Experience[] = [
    {
        id: "prabhubhakti-lead",
        title: "Lead Frontend Engineer",
        employmentType: "Full-time",
        company: {
            name: "Prabhubhakti (Spiritual SaaS)",
            url: "http://prabhubhakti.io",
            location: "Gurugram",
            workMode: "On-site",
        },
        startDate: "2025-06-01",
        links: [
            { label: "prabhubhakti.com", url: "http://learn.prabhubhakti.io", type: "project" },
            { label: "flownic", url: "https://ebook.flownic.io", type: "project" },
            { label: "prabhubhakti.io", url: "http://prabhubhakti.io", type: "project" },
        ],
        description: [
            "Developed Prabhubhakti's entire landing and SaaS website from scratch using Next.js, Tailwind CSS, and Framer Motion, increasing SEO scores to 95+.",
            "Architected a multi-tenant SaaS platform with domain/subdomain routing and Razorpay integration.",
            "Launched 2 astrologer storefronts within 2 months, reducing onboarding time by 70%.",
            "Collaborated with backend, design, and DevOps teams to ensure production readiness.",
        ],
        skills: [
            { name: "Next.js", category: "frontend" },
            { name: "Tailwind CSS", category: "frontend" },
            { name: "Framer Motion", category: "frontend" },
            { name: "Razorpay", category: "tools" },
            { name: "Multi-Tenant", category: "backend" },
        ],
    },
    {
        id: "adda247-sde",
        title: "Frontend Engineer SDE",
        employmentType: "Full-time",
        company: {
            name: "Metis Eduventures (Adda247)",
            url: "https://adda247.com",
            location: "Gurugram",
            workMode: "On-site",
        },
        startDate: "2024-08-01",
        endDate: "2025-02-01",
        links: [{ label: "adda247.com", url: "https://adda247.com", type: "project" }],
        description: [
            "Built and optimized 5+ AI chatbot features using React.js and OpenAI APIs, automating 30% of customer support.",
            "Improved initial page load speed by 25% via bundle optimization and tree-shaking.",
            "Participated in sprint planning and QA cycles in an Agile environment.",
        ],
        skills: [
            { name: "React.js", category: "frontend" },
            { name: "Zustand", category: "frontend" },
            { name: "OpenAI", category: "tools" },
            { name: "Optimization", category: "tools" },
        ],
    },
    {
        id: "itaxeasy-frontend",
        title: "Frontend Engineer",
        employmentType: "Full-time",
        company: {
            name: "ItaxEasy",
            url: "https://itaxeasy.com",
            location: "Remote",
            workMode: "Remote",
        },
        startDate: "2023-10-01",
        endDate: "2024-05-01",
        links: [{ label: "itaxeasy.com", url: "https://itaxeasy.com", type: "project" }],
        description: [
            "Revamped UI of a legacy tax-filing platform, reducing bounce rates by 22%.",
            "Introduced route-based lazy loading, resulting in 18% faster TTI.",
        ],
        skills: [
            { name: "React.js", category: "frontend" },
            { name: "Tailwind CSS", category: "frontend" },
            { name: "Performance", category: "tools" },
        ],
    },
]

const projects: Project[] = [
    {
        id: "prabhubhakti-saas",
        title: "Prabhubhakti SaaS Platform",
        category: "Full-Stack",
        status: "Completed",
        company: {
            name: "Prabhubhakti",
            url: "https://prabhubhakti.io",
            location: "Gurugram",
            workMode: "On-site",
        },
        thumbnail: "/projects/prabhubhakti.png",
        shortDescription: "Multi-tenant spiritual SaaS with domain routing and wallet credits.",
        longDescription:
            "A sophisticated multi-tenant spiritual SaaS platform featuring dynamic domain routing, wallet-based credit systems, and integrated Razorpay session bookings. Successfully launched 2 storefronts within a tight 2-month timeline.",
        metrics: [{ label: "Tenant Storefronts", value: "10+" }],
        stack: [
            { name: "Next.js", category: "frontend" },
            { name: "Tailwind CSS", category: "frontend" },
            { name: "Framer Motion", category: "frontend" },
            { name: "Razorpay", category: "backend" },
            { name: "Domain Routing", category: "devops" },
        ],
        links: [{ type: "live", url: "https://learn.prabhubhakti.io" }],
    },
    {
        id: "kalpi-capital",
        title: "Kalpi Capital Landing Page",
        category: "Frontend",
        status: "Completed",
        company: {
            name: "Kalpi Capital",
            url: "https://kalpicapital.com",
            location: "Remote",
            workMode: "Freelance",
        },
        thumbnail: "/projects/kalpicapital.png",
        shortDescription: "SEO-first fintech landing page boosting performance and visibility.",
        longDescription:
            "A full-featured, SEO-optimized landing page for a fintech firm. Built with performance in mind using ShadCN and Next.js, resulting in a significant jump in SEO rankings and user engagement.",
        metrics: [
            { label: "SEO Score", value: "97/100" },
            { label: "Improvement", value: "+29 points" },
        ],
        stack: [
            { name: "Next.js", category: "frontend" },
            { name: "Tailwind CSS", category: "frontend" },
            { name: "ShadCN", category: "frontend" },
            { name: "@next/third-parties", category: "frontend" },
        ],
        links: [{ type: "live", url: "https://kalpicapital.com" }],
    },
    {
        id: "supportdesk-ai",
        title: "SupportDesk",
        category: "AI/ML",
        status: "Maintained",
        company: {
            name: "Metis Eduventures (Adda247)",
            url: "https://adda247.com",
            location: "Gurugram",
            workMode: "On-site",
        },
        thumbnail: "/projects/supportdesk.png",
        shortDescription: "Internal AI dashboard saving ₹2L/year via support automation.",
        longDescription:
            "An internal AI-assisted dashboard that replaced third-party tools. It leverages OpenAI to automate 30% of support queries, significantly reducing operational costs and improving response times.",
        metrics: [
            { label: "Cost Savings", value: "₹2L+/year" },
            { label: "Automation", value: "30%" },
        ],
        stack: [
            { name: "React.js", category: "frontend" },
            { name: "Zustand", category: "frontend" },
            { name: "Flask", category: "backend" },
            { name: "OpenAI API", category: "ai" },
            { name: "WebSockets", category: "backend" },
        ],
        links: [{ type: "live", url: "https://supportdesk.adda247.com/" }],
    },
    {
        id: "ai-doubt-solver",
        title: "AiDoubtSolver",
        category: "AI/ML",
        status: "Completed",
        company: {
            name: "Metis Eduventures (Adda247)",
            url: "https://adda247.com",
            location: "Gurugram",
            workMode: "On-site",
        },
        thumbnail: "/projects/aidoubtsolver.png",
        shortDescription: "EdTech Voice Chatbot with real-time Whisper integration.",
        longDescription:
            "Real-time EdTech chatbot supporting voice input/output using OpenAI Whisper. Features Markdown rendering for educational content and maintains high availability for a large student base.",
        metrics: [
            { label: "Users", value: "150+" },
            { label: "Uptime", value: "99.9%" },
        ],
        stack: [
            { name: "React.js", category: "frontend" },
            { name: "SSE", category: "backend" },
            { name: "Whisper API", category: "ai" },
            { name: "Markdown", category: "frontend" },
        ],
        links: [
            {
                type: "live",
                url: "https://aidoubtsolverdev.adda247.com/?session_id=4956daa3-cb49-4eec-a337-a088d37b7cd0",
            },
        ],
    },
    {
        id: "itaxeasy-ui",
        title: "ItaxEasy UI Revamp",
        category: "Frontend",
        status: "Completed",
        company: {
            name: "ItaxEasy",
            url: "https://itaxeasy.com",
            location: "Remote",
            workMode: "Remote",
        },
        thumbnail: "/projects/itaxeasy.png",
        shortDescription: "Modernized UI for a legacy tax platform reducing bounce rates.",
        longDescription:
            "A complete UI modernization of a legacy tax platform. Implemented performance upgrades such as lazy loading to improve session time and user retention.",
        metrics: [
            { label: "Bounce Rate", value: "-22%" },
            { label: "Performance", value: "Optimized" },
        ],
        stack: [
            { name: "React.js", category: "frontend" },
            { name: "Tailwind CSS", category: "frontend" },
            { name: "Lazy Loading", category: "frontend" },
        ],
        links: [{ type: "live", url: "https://itaxeasy.com" }],
    },
]
