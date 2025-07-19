import { Metadata } from "next";
import DownloadButton from "./_components/download-button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

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
            title: "Freelance Frontend Developer",
            company: "Kalpi Capital",
            location: "Freelance",
            date: "Apr 2024",
            links: ["https://kalpicapital.com"],
            points: [
                "Delivered a full-featured, SEO-first landing page from scratch using Next.js, ShadCN, Tailwind CSS, and @next/third-parties.",
                "Boosted Lighthouse SEO score from 68 to 97 and significantly improved Core Web Vitals.",
            ],
        },
        {
            title: "Frontend Developer SDE",
            company: "Metis Eduventures Pvt. Ltd (Adda247)",
            location: "Gurugram",
            date: "Aug 2024 - Feb 2025",
            links: ["https://adda247.com"],
            points: [
                "Built and optimized 5+ AI chatbot features using React.js, Zustand, and OpenAI APIs, automating over 30% of repetitive customer support interactions.",
                "Improved initial page load speed by 25% by optimizing bundle size, implementing lazy loading, and tree-shaking.",
                "Participated in sprint planning, pull requests, and QA cycles in an Agile environment.",
            ],
        },
        {
            title: "Frontend Developer",
            company: "ItaxEasy",
            location: "Remote",
            date: "Nov 2023 - May 2024",
            links: ["https://itaxeasy.com"],
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
            links: ["https://supportdesk.adda247.com/"],
            points: [
                "Built an internal AI-assisted dashboard that eliminated the need for a third-party support tool, saving ₹2L+/year.",
                "Integrated real-time chat fallback logic and multi-step scripted bot responses via WebSocket channels.",
            ],
        },
        {
            name: "AiDoubtSolver - EdTech Voice Chatbot",
            stack: "React.js, SSE, Whisper API, Markdown",
            links: ["https://aidoubtsolverdev.adda247.com/?session_id=4956daa3-cb49-4eec-a337-a088d37b7cd0"],
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
        testing: ["vitest", "Jest", "React Testing Library"],
        integrations: ["Razorpay", "OpenAI", "Whisper", "@next/third-parties"],
        architecture: ["Multi-Tenant SaaS", "SSR", "CSR", "Domain Routing", "Wallet Systems"],
    },
    education: [
        {
            degree: "Master of Computer Applications",
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
            <div className="max-w-4xl mx-auto print:hidden mb-4">
                <div className="flex items-center gap-2 rounded-lg bg-background shadow-lg border px-4 py-3">
                    <DownloadButton />
                </div>
            </div>

            {/* Header */}
            <main className="shadow-lg rounded-xl print:shadow-none print:rounded-none font-arial text-sm print:text-xs leading-tight print:leading-tight max-w-4xl mx-auto p-4 print:p-0 print:mx-0 print:max-w-full bg-white text-gray-800">
                <header className="mb-4 print:mb-2 flex flex-col gap-1 text-sm text-center">
                    <h1 className="text-2xl font-bold leading-none uppercase">{name}</h1>
                    <p className="text-lg font-semibold text-muted-foreground">{title}</p>

                    <div className="flex justify-center flex-wrap gap-2 print:gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <MapPin size={12} className="print:hidden" />
                            {contact.location}
                        </span>
                        <span>|</span>
                        <span className="flex items-center gap-1">
                            <Phone size={12} className="print:hidden" />
                            {contact.phone}
                        </span>
                        <span>|</span>
                        <a
                            href={`mailto:${contact.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1"
                        >
                            <Mail size={12} className="print:hidden" />
                            {contact.email}
                        </a>
                        <span>|</span>
                        <a
                            href={`https://${contact.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1"
                        >
                            <Github size={12} className="print:hidden" />
                            {contact.github.replace(/^https?:\/\//, "")}
                        </a>
                        <span>|</span>
                        <a
                            href={`https://${contact.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline flex items-center gap-1"
                        >
                            <Linkedin size={12} className="print:hidden" />
                            {contact.linkedin.replace(/^https?:\/\//, "")}
                        </a>
                    </div>
                </header>

                <section className="hidden print:hidden">{atsKeywords.join(", ")}</section>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-xl font-semibold mb-1">Summary</h2>
                    <p>{summary}</p>
                </section>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-xl font-semibold mb-1">Experience</h2>
                    {experience.map((job, index) => (
                        <article key={index} className="break-inside-avoid mb-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">
                                    {job.title} - {job.company}
                                </h3>
                                <p className="text-xs">
                                    {job.date} | {job.location}
                                </p>
                            </div>
                            {job.links && (
                                <div className="text-xs mb-1">
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
                    <h2 className="text-xl font-semibold mb-1">Projects</h2>
                    {projects.map((project, index) => (
                        <article key={index} className="break-inside-avoid mb-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{project.name}</h3>
                                <div>
                                    {project.links && (
                                        <div className="text-xs mb-1">
                                            {project.links.map((link, idx) => (
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
                                </div>
                            </div>
                            <p className="text-xs mb-1">Tech Stack: {project.stack}</p>

                            <ul className="list-disc ml-5 space-y-1">
                                {project.points.slice(0, 2).map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </section>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-xl font-semibold mb-1">Technical Skills</h2>
                    <ul className="list-disc ml-5 space-y-1">
                        {Object.entries(skills).map(([category, items]) => (
                            <li key={category}>
                                <strong className="capitalize">{category}:</strong> {items.join(", ")}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="break-inside-avoid mb-4">
                    <h2 className="text-xl font-semibold mb-1">Education</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {education.map((edu, index) => (
                            <li key={index} className="flex justify-between">
                                <p>
                                    <strong>{edu.degree}</strong>, {edu.institution}
                                </p>
                                <span className="text-sm">{edu.date}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="break-inside-avoid">
                    <h2 className="text-xl font-semibold mb-1">Certifications and Training</h2>
                    <ul className="list-disc ml-5">
                        {certifications.map((cert, i) => (
                            <li key={i}>{cert}</li>
                        ))}
                    </ul>
                </section>
            </main>
            <div className="print:hidden h-32" area-hidden="true" />
        </>
    );
}
