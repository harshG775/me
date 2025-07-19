import { Metadata } from "next";
import DownloadButton from "./_components/download-button";

export const resumeData = {
    metadata: {
        title: "Harsh_WebDeveloper_Resume",
        description: "ATS-optimized resume of Harsh Gaur for Frontend / Full Stack Developer roles.",
    },
    name: "Harsh Gaur",
    title: "Frontend / Full Stack Developer - React.js | Next.js | MERN Stack",
    contact: {
        location: "Delhi, India",
        email: "hgaur491@gmail.com",
        phone: "+91 9310745921",
        github: "github.com/harshG775",
        linkedin: "linkedin.com/in/harshg775",
    },
    summary: `Frontend-focused Full Stack Developer with 2+ years of hands-on experience building scalable, high-performing SaaS and AI-powered platforms using Next.js, React.js, and the MERN stack. Proven ability to lead frontend architecture, optimize performance, and deliver measurable business results across multi-tenant and customer-facing systems. Passionate about building fast, accessible, and maintainable interfaces.`,
    experience: [
        {
            title: "Lead Frontend Developer",
            company: "Prabhubhakti (Spiritual SaaS Platform)",
            location: "Gurugram",
            date: "Jun 2025 - Present",
            links: ["http://prabhubhakti.io", "http://prabhubhakti.com"],
            points: [
                "Developed Prabhubhakti's entire landing and SaaS website from scratch using Next.js, Tailwind CSS, and Framer Motion, increasing SEO scores to 95+ and organic traffic by 40% in the first month.",
                "Architected a multi-tenant SaaS platform with domain/subdomain routing, wallet-based credit system, and Razorpay integration for session bookings.",
                "Launched 2 astrologer storefronts (astrodrpc.com, divinetwinsoul.com) within 2 months, reducing onboarding time by 70%.",
                "Collaborated with backend, design, and DevOps teams to ensure seamless integration and production readiness.",
            ],
        },
        {
            title: "Frontend Developer SDE",
            company: "Metis Eduventures Pvt. Ltd (Adda247)",
            location: "Gurugram",
            date: "Aug 2024 - Feb 2025",
            points: [
                "Built and optimized 5+ AI chatbot features using React.js, Zustand, and OpenAI APIs, automating over 30% of repetitive customer support interactions.",
                "Improved initial page load speed by 25% by optimizing bundle size, implementing lazy loading, and tree-shaking.",
                "Participated in sprint planning, pull requests, and QA cycles in an Agile environment.",
            ],
        },
        {
            title: "Freelance Frontend Developer",
            company: "Kalpi Capital",
            location: "Remote",
            date: "Apr 2024",
            links: ["https://kalpicapital.com"],
            points: [
                "Delivered a full-featured, SEO-first landing page from scratch using Next.js, ShadCN, Tailwind CSS, and @next/third-parties.",
                "Boosted Lighthouse SEO score from 68 to 97 and significantly improved Core Web Vitals.",
            ],
        },
        {
            title: "Frontend Developer",
            company: "ItaxEasy",
            location: "Remote",
            date: "Nov 2023 - May 2024",
            points: [
                "Revamped UI of a legacy tax-filing platform using React.js and Tailwind CSS, reducing bounce rates by 22% and improving session time by 17%.",
                "Introduced route-based lazy loading, resulting in 18% faster time-to-interactive.",
            ],
        },
    ],
    projects: [
        {
            name: "SupportDesk - AI-Powered Customer Support Tool",
            stack: "React.js, Zustand, Flask, OpenAI API, WebSockets",
            points: [
                "Built an internal AI-assisted dashboard that eliminated the need for a third-party support tool, saving ₹2L+/year.",
                "Integrated real-time chat fallback logic and multi-step scripted bot responses via WebSocket channels.",
            ],
        },
        {
            name: "AiDoubtSolver - EdTech Voice Chatbot",
            stack: "React.js, SSE, Whisper API, Markdown",
            points: [
                "Developed a real-time AI chatbot that supports voice input/output via OpenAI Whisper and renders Markdown responses for clarity.",
                "Handled 150+ concurrent student sessions during internal testing with >99.9% uptime.",
            ],
        },
    ],
    skills: {
        frontend: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "Zustand",
            "Redux",
            "Tailwind CSS",
            "ShadCN",
            "Framer Motion",
            "HTML5",
            "CSS3",
        ],
        backend: ["Node.js", "Express.js", "Flask", "REST APIs", "GraphQL", "WebSockets", "JWT"],
        databases: ["MongoDB", "PostgreSQL", "Prisma", "Redis"],
        tools: ["Git", "GitHub", "Vite", "Webpack", "Postman", "Docker (basic)"],
        testing: ["Jest", "React Testing Library"],
        integrations: ["Razorpay", "OpenAI", "LangChain", "Whisper", "@next/third-parties"],
        architecture: ["Multi-Tenant SaaS", "SSR", "CSR", "Domain Routing", "Wallet Systems"],
    },
    education: [
        {
            degree: "Master of Computer Applications - Honours",
            institution: "Indra Gandhi National Open University (IGNOU)",
            date: "2025 - present",
        },
        {
            degree: "Bachelor of Arts - English Honours",
            institution: "Prof. Rajendra Singh University",
            date: "2020 - 2023",
        },
    ],
    certifications: ["Web Development Certification - MyCodeLearning (2023)"],
    atsKeywords: [
        "Frontend Developer",
        "Full Stack Developer",
        "MERN Stack",
        "React.js",
        "Next.js",
        "JavaScript Developer",
        "SEO Optimization",
        "Tailwind CSS",
        "Zustand",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "MongoDB",
        "WebSockets",
        "Razorpay",
        "OpenAI",
        "SSR",
        "CSR",
        "SaaS Development",
        "UI Performance",
        "Agile",
    ],
};

export const metadata: Metadata = resumeData.metadata;

export default function ResumePage() {
    const { name, title, contact, summary, experience, projects, skills, education, certifications, atsKeywords } =
        resumeData;

    return (
        <>
            <div className="fixed bottom-4 right-4 z-50 print:hidden">
                <div className="flex items-center gap-2 rounded-lg bg-background shadow-lg border px-4 py-3">
                    <DownloadButton />
                </div>
            </div>
            <main className="text-sm print:text-xs leading-tight print:leading-tight max-w-[794px] mx-auto p-4 print:p-0 print:mx-0 print:max-w-full bg-white">
                <header className="mb-4 print:mb-2 flex flex-col gap-1 text-sm print:text-[11px]">
                    {/* Top Row: Name + Location */}
                    <div className="flex justify-between items-start flex-wrap gap-y-1">
                        <div>
                            <h1 className="text-2xl font-bold leading-none">{name}</h1>
                            <p className="text-sm text-gray-700">{title}</p>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                            <p>{contact.location}</p>
                            <p>{contact.phone}</p>
                        </div>
                    </div>

                    {/* Bottom Row: GitHub & LinkedIn */}
                    <div className="flex gap-4 text-sm text-blue-600 underline">
                        <a href={`https://${contact.email}`} target="_blank" rel="noopener noreferrer">
                            {contact.email}
                        </a>
                        <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer">
                            {contact.github}
                        </a>
                        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                            {contact.linkedin}
                        </a>
                    </div>
                </header>

                <div className="hidden print:hidden">{atsKeywords.join(", ")}</div>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-lg font-semibold mb-1">Professional Summary</h2>
                    <p>{summary}</p>
                </section>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-lg font-semibold mb-1">Experience</h2>
                    {experience.map((job, index) => (
                        <article key={index} className="break-inside-avoid mb-3">
                            <h3 className="font-semibold">
                                {job.title} - {job.company}
                            </h3>
                            <p className="text-xs text-gray-600">
                                {job.date} | {job.location}
                            </p>
                            {job.links && (
                                <div className="text-xs text-blue-600 mb-1">
                                    {job.links.map((link, idx) => (
                                        <a
                                            key={idx}
                                            href={link}
                                            className="mr-2 underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {new URL(link).hostname}
                                        </a>
                                    ))}
                                </div>
                            )}
                            <ul className="list-disc ml-5 space-y-1">
                                {job.points.slice(0, 3).map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-lg font-semibold mb-1">Projects</h2>
                    {projects.map((project, index) => (
                        <article key={index} className="break-inside-avoid mb-2">
                            <h3 className="font-medium">{project.name}</h3>
                            <p className="text-xs italic mb-1">Tech Stack: {project.stack}</p>
                            <ul className="list-disc ml-5 space-y-1">
                                {project.points.slice(0, 2).map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-lg font-semibold mb-1">Technical Skills</h2>
                    <ul className="list-disc ml-5 space-y-1">
                        {Object.entries(skills).map(([category, items]) => (
                            <li key={category}>
                                <strong className="capitalize">{category}:</strong> {items.join(", ")}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-lg font-semibold mb-1">Education</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {education.map((edu, index) => (
                            <li key={index}>
                                <strong>{edu.degree}</strong>, {edu.institution} ({edu.date})
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="break-inside-avoid">
                    <h2 className="text-lg font-semibold mb-1">Certifications</h2>
                    <ul className="list-disc ml-5">
                        {certifications.map((cert, i) => (
                            <li key={i}>{cert}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}
