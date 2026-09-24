import { ExternalLink } from "#/components/external-link";

export function Work() {
    return (
        <section id="work" aria-labelledby="work-heading" className="max-w-4xl mx-auto">
            <h2 id="work-heading">Featured work</h2>

            <article>
                <p>Professional</p>
                <h3>Prabhubhakti multi-tenant platforms</h3>
                <p>Three SaaS products (astrologer, temple management, ebook) on a shared multi-tenant architecture.</p>
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
                                Tenants are resolved from the request domain or subdomain, keeping each client's routes
                                and data isolated.
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
                                TanStack Form and Zod drive a schema-based form system, so validation follows the resume
                                structure.
                            </li>
                            <li>dnd-kit handles drag-and-drop section ordering and Tiptap handles rich text.</li>
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
                        Multi-tenant apps need each tenant's routes and theme kept separate on shared infrastructure.
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
                        <ExternalLink href="https://github.com/harshG775/multi-tenant-saas">GitHub</ExternalLink>
                    </li>
                </ul>
            </article>
        </section>
    );
}
