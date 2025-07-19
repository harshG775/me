import About from "./_components/sections/About";
import Contact from "./_components/sections/Contact";
import Experience from "./_components/sections/Experience";
import Hero from "./_components/sections/Hero";
import Projects from "./_components/sections/Projects";
import Skills from "./_components/sections/Skills";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Home() {
    return (
        <div className="relative">
            <Header />
            <main className="[&>section]:min-h-[90dvh] [&>section]:scroll-mt-24">
                <Hero id="Hero" />
                <About id="About" />
                <Skills id="Skills" />
                <Projects id="Projects" />
                <Experience id="Experience" />
                <Contact id="Contact" />
            </main>
            <Footer />
        </div>
    );
}
