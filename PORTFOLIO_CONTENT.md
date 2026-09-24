# Harsh Gaur, Portfolio Content

## Header
- **Logo:** logo.svg, links to #top
- **Nav (anchors):** Work (#work) · Experience (#experience) · About (#about) · Skills (#skills) · Contact (#contact)
- **Right slot:** placeholder ("---", not yet implemented)

## Hero
- **Profile image:** profile.png
- **Heading:** "Hi, I'm **Harsh**"
- **Tagline:** "I orchestrate *ideas* into products with ✦ **React.js**" (badge-styled)
- **Subtext:** "Front-end Engineer · Delhi · Open to roles"
- **Icon links:** GitHub, LinkedIn, Email, Resume (download)

## Featured Work

### 1. Prabhubhakti multi-tenant platforms (Professional, lead project)
- **Summary:** Three SaaS products (astrologer, temple management, ebook) on a shared multi-tenant architecture.
- **Problem:** Every client needs its own branded site, domain, and payment flow, and building each one separately does not scale.
- **My role:** Architected the tenant system and built the front ends.
- **Key decisions:**
  - Tenants are resolved from the request domain or subdomain, keeping each client's routes and data isolated.
  - Per-tenant theming lets one codebase serve differently branded sites.
  - Booking and payment components are reusable and sit on one centralized PhonePe integration.
  - Onboarding templates and routing are standardized across the tenant apps.
- **Result:** 30+ live tenants and 2,000+ end users, with new tenant onboarding time down 70%.
- **Stack:** Next.js, TanStack Start, TypeScript, Tailwind CSS, PhonePe

### 2. SupportDesk (Professional)
- **Summary:** AI-powered customer support platform with live handover to human agents.
- **Problem:** Customer support ran on a paid third-party vendor.
- **My role:** Built the platform, including the real-time agent handover.
- **Key decisions:**
  - WebSockets keep the conversation live when an agent takes over from the AI.
  - The OpenAI API handles automated replies until a human steps in.
- **Result:** Replaced the vendor and saved ₹2L per year.
- **Stack:** React, WebSockets, OpenAI API

### 3. Anchor resume builder (Personal)
- **Summary:** A browser-based resume builder with live PDF preview and no server rendering.
- **Problem:** Server-rendered PDFs need a backend and a round trip for every preview.
- **My role:** Designed and built it end to end.
- **Key decisions:**
  - Typst compiled to WebAssembly generates the PDF in the browser.
  - TanStack Form and Zod drive a schema-based form system, so validation follows the resume structure.
  - dnd-kit handles drag-and-drop section ordering and Tiptap handles rich text.
- **Result:** Instant PDF generation entirely on the client.
- **Stack:** TanStack Start, TanStack Form, Zod, Typst (WASM), Tiptap, dnd-kit
- **Link:** Live site, anchor.harshgaur.in

### 4. Multi-tenant SaaS starter (Open source)
- **Summary:** A public proof of concept for domain-based tenancy in TanStack Start.
- **Problem:** Multi-tenant apps need each tenant's routes and theme kept separate on shared infrastructure.
- **My role:** Designed and published the proof of concept.
- **Key decisions:**
  - Tenants are resolved from the domain.
  - Routing is isolated per tenant.
  - Theme management is handled per tenant.
- **Result:** An open-source reference for scalable tenant separation with TanStack Start.
- **Stack:** TanStack Start, TanStack Router, TypeScript, Tailwind CSS
- **Link:** GitHub, github.com/harshG775/multi-tenant-saas

## Experience

### 01. Front-end Engineer (current)
- **Company:** Prabhubhakti Pvt. Ltd.
- **Period:** Jun 2025 – Present
- **Location:** Gurugram
- **Highlights:**
  - Architected three multi-tenant SaaS platforms (Astrologer, Temple Management, and Ebook) using Next.js and TanStack Start, supporting 30+ live tenant clients and 2,000+ end users.
  - Built reusable React/TypeScript booking and payment components on a centralized PhonePe integration, reducing new tenant onboarding time by 70%.
  - Standardized onboarding templates and routing across tenant applications, reducing duplicate implementation and speeding up new tenant features.

### 02. Front-end Engineer (SDE Trainee)
- **Company:** Metis Eduventures Pvt. Ltd. (Adda247)
- **Period:** Aug 2024 – Feb 2025
- **Location:** Gurugram
- **One-line highlight:** Built SupportDesk, saving ₹2L per year.
- **Highlights:**
  - Built SupportDesk, an AI-powered customer support platform with real-time agent handover using WebSockets and the OpenAI API, replacing a third-party vendor and saving ₹2L per year.
  - Developed a voice-enabled AI academic assistant using the Whisper API and SSE streaming, supporting 150+ concurrent users.
  - Improved React application performance by 25% using bundle analysis, code splitting, React.memo, and lazy loading.

### 03. Front-end Developer Intern
- **Company:** ItaxEasy
- **Period:** Nov 2023 – May 2024
- **Location:** Remote
- **One-line highlight:** Migrated a legacy React tax platform to Next.js with SSR.
- **Highlights:**
  - Migrated a legacy React.js tax platform to the Next.js App Router with SSR, improving SEO indexing and reducing initial page load time.
  - Implemented route-based code splitting and lazy loading to reduce JavaScript payload and improve navigation performance.

## About
I'm a front-end engineer who likes the architecture side of the front end: how a codebase is structured so that the tenth client is as easy to launch as the second. Most of my work has been multi-tenant SaaS, where one well-built system serves dozens of differently branded products.

Outside client work, I build tools that push what the browser can do, like compiling PDFs with WebAssembly, and I publish open-source proofs of concept to test architecture ideas. I'm looking for a front-end role where I can work on complex, product-scale problems.

### Education
- Master of Computer Applications (MCA), Indira Gandhi National Open University (IGNOU), 2026 – Expected 2028
- Bachelor of Arts, Prof. Rajendra Singh University, 2020 – 2023

## Skills
- **Front end:** React, Next.js, TypeScript, Tailwind CSS
- **React ecosystem:** TanStack Start, TanStack Router, TanStack Query, TanStack Form, Zustand
- **Backend and data:** Node.js, Express, PostgreSQL, MongoDB, Drizzle ORM, Better Auth
- **Real-time and AI:** WebSockets, SSE, OpenAI API, Whisper
- **Tools:** Git, GitHub, Docker

## Contact
- **Heading:** Let's talk.
- **Body:** I'm open to front-end engineer roles, especially on product teams working with React and TypeScript. Email is the fastest way to reach me.
- **Email:** hgaur491@gmail.com
- **GitHub:** github.com/harshG775
- **LinkedIn:** linkedin.com/in/harshg775
- **Form fields:** Name, Email, Message. Button: Send message

## Footer
- **Name:** Harsh Gaur
- **Tagline:** "Turning ideas into production-ready platforms."
- **Copyright:** © {current year} Harsh Gaur
- **Links:** GitHub, LinkedIn, Email, Resume (download), Sitemap
- **Theme selector:** Light · Dark · System
