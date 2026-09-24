export function About() {
    return (
        <section id="about" aria-labelledby="about-heading" className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
                <div className="lg:col-span-3">
                    <p className="text-xs font-normal tracking-widest text-mist-400 uppercase">03</p>
                    <h2 id="about-heading" className="mt-1 text-2xl font-bold">
                        About
                    </h2>
                </div>
                <div className="flex flex-col gap-5 text-base leading-relaxed text-mist-800 lg:col-span-6 lg:col-start-5 lg:text-lg">
                    <p>
                        I'm a front-end engineer who likes the architecture side of the front end: how a codebase is
                        structured so that the tenth client is as easy to launch as the second. Most of my work has been
                        multi-tenant SaaS, where one well-built system serves dozens of differently branded products.
                    </p>
                    <p className="text-mist-600">
                        Outside client work, I build tools that push what the browser can do, like compiling PDFs with
                        WebAssembly, and I publish open-source proofs of concept to test architecture ideas. I'm looking
                        for a front-end role where I can work on complex, product-scale problems.
                    </p>
                </div>
            </div>
            <div className="mt-10 border-t border-mist-200 pt-8 lg:mt-12">
                <h3 className="text-xs font-medium tracking-widest text-mist-400 uppercase">Education</h3>
                <ul className="mt-3 space-y-2 text-sm text-mist-700">
                    <li>
                        Master of Computer Applications (MCA), Indira Gandhi National Open University (IGNOU) (2026 -
                        Expected 2028)
                    </li>
                    <li>Bachelor of Arts, Prof. Rajendra Singh University (2020 - 2023)</li>
                </ul>
            </div>
        </section>
    );
}
