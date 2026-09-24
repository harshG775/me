import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "#/components/external-link";
import { GithubIcon } from "#/components/icons/github-icon";
import { LinkedinIcon } from "#/components/icons/linkedin-icon";
import { MailIcon } from "#/components/icons/mail-icon";
import { ResumeIcon } from "#/components/icons/resume-icon";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Harsh Gaur" },
            {
                name: "description",
                content:
                    "2+ years shipping production platforms: 30+ live tenants, AI-powered support tools, and browser-native products.",
            },
        ],
    }),
    component: HomePage,
});

function HomePage() {
    return (
        <>
            <main id="top" className="pt-12">
                <section
                    aria-labelledby="hero-heading"
                    className="flex flex-col items-center px-4 py-20 lg:py-28 text-center"
                >
                    <img
                        src="/profile.png"
                        alt="Harsh Gaur"
                        className="mt-5 h-24 w-24 rounded-full bg-neutral-100 object-cover"
                    />
                    <h1 id="hero-heading" className="mt-5 font-normal text-2xl lg:text-4xl">
                        Hi, I'm <span className="font-medium text-primary">Harsh</span>
                    </h1>
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-2 font-normal text-2xl lg:text-4xl">
                        <span className="pb-1">
                            I orchestrate <span className="italic text-primary">ideas</span> into products with
                        </span>
                        <span className="flex gap-1">
                            <span className="text-primary">{"✦"}</span>
                            <span className="rounded-full border border-neutral-300 px-5 py-1 text-primary bg-primary/10 font-medium text-2xl">
                                {"React.js"}
                            </span>
                        </span>
                    </div>
                    <p className="mt-3 text-xs font-normal tracking-widest text-neutral-400 uppercase">
                        Front-end Engineer · Delhi · Open to roles
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-3">
                        <ExternalLink href="https://github.com/harshG775">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-700 hover:bg-primary/10 hover:text-neutral-900 text-lg">
                                <GithubIcon />
                            </span>
                        </ExternalLink>
                        <ExternalLink href="https://www.linkedin.com/in/harshg775">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-700 hover:bg-primary/10 hover:text-neutral-900 text-lg">
                                <LinkedinIcon />
                            </span>
                        </ExternalLink>
                        <a href="mailto:hgaur491@gmail.com">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-700 hover:bg-primary/10 hover:text-neutral-900 text-lg">
                                <MailIcon />
                            </span>
                        </a>
                        <a href="/harsh-gaur-frontend-engineer.pdf" download title="Download resume">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-100 text-neutral-700 hover:bg-primary/10 hover:text-neutral-900 text-lg">
                                <ResumeIcon />
                            </span>
                        </a>
                    </div>
                </section>

                <section id="work" aria-labelledby="work-heading">
                    <h2 id="work-heading">Featured work</h2>

                    <article>
                        <p>Professional</p>
                        <h3>Prabhubhakti multi-tenant platforms</h3>
                        <p>
                            Three SaaS products (astrologer, temple management, ebook) on a shared multi-tenant
                            architecture.
                        </p>
                        <dl>
                            <dt>Problem</dt>
                            <dd>
                                Every client needs its own branded site, domain, and payment flow, and building each one
                                separately does not scale.
                            </dd>
                            <dt>My role</dt>
                            <dd>Architected the tenant system and built the front ends.</dd>
                            <dt>Key decisions</dt>
                            <dd>
                                <ul>
                                    <li>
                                        Tenants are resolved from the request domain or subdomain, keeping each client's
                                        routes and data isolated.
                                    </li>
                                    <li>Per-tenant theming lets one codebase serve differently branded sites.</li>
                                    <li>
                                        Booking and payment components are reusable and sit on one centralized PhonePe
                                        integration.
                                    </li>
                                    <li>Onboarding templates and routing are standardized across the tenant apps.</li>
                                </ul>
                            </dd>
                            <dt>Result</dt>
                            <dd>30+ live tenants and 2,000+ end users, with new tenant onboarding time down 70%.</dd>
                            <dt>Stack</dt>
                            <dd>Next.js · TanStack Start · TypeScript · Tailwind CSS · PhonePe</dd>
                        </dl>
                    </article>

                    <article>
                        <p>Professional</p>
                        <h3>SupportDesk</h3>
                        <p>AI-powered customer support platform with live handover to human agents.</p>
                        <dl>
                            <dt>Problem</dt>
                            <dd>Customer support ran on a paid third-party vendor.</dd>
                            <dt>My role</dt>
                            <dd>Built the platform, including the real-time agent handover.</dd>
                            <dt>Key decisions</dt>
                            <dd>
                                <ul>
                                    <li>WebSockets keep the conversation live when an agent takes over from the AI.</li>
                                    <li>The OpenAI API handles automated replies until a human steps in.</li>
                                </ul>
                            </dd>
                            <dt>Result</dt>
                            <dd>Replaced the vendor and saved ₹2L per year.</dd>
                            <dt>Stack</dt>
                            <dd>React · WebSockets · OpenAI API</dd>
                        </dl>
                    </article>

                    <article>
                        <p>Personal</p>
                        <h3>Anchor resume builder</h3>
                        <p>A browser-based resume builder with live PDF preview and no server rendering.</p>
                        <dl>
                            <dt>Problem</dt>
                            <dd>Server-rendered PDFs need a backend and a round trip for every preview.</dd>
                            <dt>My role</dt>
                            <dd>Designed and built it end to end.</dd>
                            <dt>Key decisions</dt>
                            <dd>
                                <ul>
                                    <li>Typst compiled to WebAssembly generates the PDF in the browser.</li>
                                    <li>
                                        TanStack Form and Zod drive a schema-based form system, so validation follows
                                        the resume structure.
                                    </li>
                                    <li>
                                        dnd-kit handles drag-and-drop section ordering and Tiptap handles rich text.
                                    </li>
                                </ul>
                            </dd>
                            <dt>Result</dt>
                            <dd>Instant PDF generation entirely on the client.</dd>
                            <dt>Stack</dt>
                            <dd>TanStack Start · TanStack Form · Zod · Typst (WASM) · Tiptap · dnd-kit</dd>
                        </dl>
                        <ul>
                            <li>
                                <ExternalLink href="https://anchor.harshgaur.in">Live site</ExternalLink>
                            </li>
                        </ul>
                    </article>

                    <article>
                        <p>Open source</p>
                        <h3>Multi-tenant SaaS starter</h3>
                        <p>A public proof of concept for domain-based tenancy in TanStack Start.</p>
                        <dl>
                            <dt>Problem</dt>
                            <dd>
                                Multi-tenant apps need each tenant's routes and theme kept separate on shared
                                infrastructure.
                            </dd>
                            <dt>My role</dt>
                            <dd>Designed and published the proof of concept.</dd>
                            <dt>Key decisions</dt>
                            <dd>
                                <ul>
                                    <li>Tenants are resolved from the domain.</li>
                                    <li>Routing is isolated per tenant.</li>
                                    <li>Theme management is handled per tenant.</li>
                                </ul>
                            </dd>
                            <dt>Result</dt>
                            <dd>An open-source reference for scalable tenant separation with TanStack Start.</dd>
                            <dt>Stack</dt>
                            <dd>TanStack Start · TanStack Router · TypeScript · Tailwind CSS</dd>
                        </dl>
                        <ul>
                            <li>
                                <ExternalLink href="https://github.com/harshG775/multi-tenant-saas">
                                    GitHub
                                </ExternalLink>
                            </li>
                        </ul>
                    </article>
                </section>

                <section id="experience" aria-labelledby="experience-heading">
                    <h2 id="experience-heading">Experience</h2>
                    <ol>
                        <li>
                            <p>Jun 2025 – Present · Gurugram</p>
                            <h3>Front-end Engineer</h3>
                            <p>Prabhubhakti Pvt. Ltd.</p>
                            <ul>
                                <li>
                                    Architected three multi-tenant SaaS platforms (Astrologer, Temple Management, and
                                    Ebook) using Next.js and TanStack Start, supporting 30+ live tenant clients and
                                    2,000+ end users.
                                </li>
                                <li>
                                    Built reusable React/TypeScript booking and payment components on a centralized
                                    PhonePe integration, reducing new tenant onboarding time by 70%.
                                </li>
                                <li>
                                    Standardized onboarding templates and routing across tenant applications, reducing
                                    duplicate implementation and speeding up new tenant features.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Aug 2024 – Feb 2025 · Gurugram</p>
                            <h3>Front-end Engineer (SDE Trainee)</h3>
                            <p>Metis Eduventures Pvt. Ltd. (Adda247)</p>
                            <ul>
                                <li>
                                    Built SupportDesk, an AI-powered customer support platform with real-time agent
                                    handover using WebSockets and the OpenAI API, replacing a third-party vendor and
                                    saving ₹2L per year.
                                </li>
                                <li>
                                    Developed a voice-enabled AI academic assistant using the Whisper API and SSE
                                    streaming, supporting 150+ concurrent users.
                                </li>
                                <li>
                                    Improved React application performance by 25% using bundle analysis, code splitting,
                                    React.memo, and lazy loading.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Nov 2023 – May 2024 · Remote</p>
                            <h3>Front-end Developer Intern</h3>
                            <p>ItaxEasy</p>
                            <ul>
                                <li>
                                    Migrated a legacy React.js tax platform to the Next.js App Router with SSR,
                                    improving SEO indexing and reducing initial page load time.
                                </li>
                                <li>
                                    Implemented route-based code splitting and lazy loading to reduce JavaScript payload
                                    and improve navigation performance.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section id="about" aria-labelledby="about-heading">
                    <h2 id="about-heading">About</h2>
                    <p>
                        I'm a front-end engineer who likes the architecture side of the front end: how a codebase is
                        structured so that the tenth client is as easy to launch as the second. Most of my work has been
                        multi-tenant SaaS, where one well-built system serves dozens of differently branded products.
                    </p>
                    <p>
                        Outside client work, I build tools that push what the browser can do, like compiling PDFs with
                        WebAssembly, and I publish open-source proofs of concept to test architecture ideas. I'm looking
                        for a front-end role where I can work on complex, product-scale problems.
                    </p>
                    <h3>Education</h3>
                    <ul>
                        <li>
                            Master of Computer Applications (MCA), Indira Gandhi National Open University (IGNOU) (2026
                            – Expected 2028)
                        </li>
                        <li>Bachelor of Arts, Prof. Rajendra Singh University (2020 – 2023)</li>
                    </ul>
                </section>

                <section id="skills" aria-labelledby="skills-heading">
                    <h2 id="skills-heading">Skills</h2>
                    <dl>
                        <div>
                            <dt>Front end</dt>
                            <dd>React, Next.js, TypeScript, Tailwind CSS</dd>
                        </div>
                        <div>
                            <dt>React ecosystem</dt>
                            <dd>TanStack Start, TanStack Router, TanStack Query, TanStack Form, Zustand</dd>
                        </div>
                        <div>
                            <dt>Backend and data</dt>
                            <dd>Node.js, Express, PostgreSQL, MongoDB, Drizzle ORM, Better Auth</dd>
                        </div>
                        <div>
                            <dt>Real-time and AI</dt>
                            <dd>WebSockets, SSE, OpenAI API, Whisper</dd>
                        </div>
                        <div>
                            <dt>Tools</dt>
                            <dd>Git, GitHub, Docker</dd>
                        </div>
                    </dl>
                </section>

                <section id="contact" aria-labelledby="contact-heading">
                    <h2 id="contact-heading">Let's talk.</h2>
                    <p>
                        I'm open to front-end engineer roles, especially on product teams working with React and
                        TypeScript. Email is the fastest way to reach me.
                    </p>
                    <p>
                        <a href="mailto:hgaur491@gmail.com">hgaur491@gmail.com</a>
                    </p>
                    <ul>
                        <li>
                            <ExternalLink href="https://github.com/harshG775">GitHub</ExternalLink>
                        </li>
                        <li>
                            <ExternalLink href="https://www.linkedin.com/in/harshg775">LinkedIn</ExternalLink>
                        </li>
                    </ul>
                </section>
            </main>

            <footer>
                <p>© {new Date().getFullYear()} Harsh Gaur</p>
                <a href="#top">Back to top</a>
            </footer>
        </>
    );
}
