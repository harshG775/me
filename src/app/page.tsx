import About from "./_components/sections/About";
import Contect from "./_components/sections/Contect";
import Experience from "./_components/sections/Experience";
import Hero from "./_components/sections/Hero";
import Projects from "./_components/sections/Projects";
import Skills from "./_components/sections/Skills";

export default function Home() {
    return (
        <div>
            <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-muted px-4">
                <div>Header</div>
                <div>
                    <a href="#Hero">Hero</a>
                    <a href="#About">About</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Experience">Experience</a>
                    <a href="#Contect">Contect</a>
                </div>
                <div>CTA</div>
            </header>
            <main className="[&>section]:min-h-screen [&>section]:scroll-mt-24" >
                <Hero id="Hero" />
                <About id="About" />
                <Skills id="Skills" />
                <Projects id="Projects" />
                <Experience id="Experience" />
                <Contect id="Contect" />
            </main>
            <footer>Footer</footer>
        </div>
    );
}
