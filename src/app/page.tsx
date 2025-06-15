import About from "./_components/sections/About";
import Contect from "./_components/sections/Contect";
import Experience from "./_components/sections/Experience";
import Hero from "./_components/sections/Hero";
import Projects from "./_components/sections/Projects";
import Skills from "./_components/sections/Skills";

export default function Home() {
    return (
        <div>
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contect />
            </main>
        </div>
    );
}
