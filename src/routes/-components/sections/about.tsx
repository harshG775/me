export function About() {
    return (
        <section id="about" aria-labelledby="about-heading" className="max-w-4xl mx-auto">
            <h2 id="about-heading">About</h2>
            <p>
                I'm a front-end engineer who likes the architecture side of the front end: how a codebase is structured
                so that the tenth client is as easy to launch as the second. Most of my work has been multi-tenant SaaS,
                where one well-built system serves dozens of differently branded products.
            </p>
            <p>
                Outside client work, I build tools that push what the browser can do, like compiling PDFs with
                WebAssembly, and I publish open-source proofs of concept to test architecture ideas. I'm looking for a
                front-end role where I can work on complex, product-scale problems.
            </p>
            <h3>Education</h3>
            <ul>
                <li>
                    Master of Computer Applications (MCA), Indira Gandhi National Open University (IGNOU) (2026 -
                    Expected 2028)
                </li>
                <li>Bachelor of Arts, Prof. Rajendra Singh University (2020 - 2023)</li>
            </ul>
        </section>
    );
}
