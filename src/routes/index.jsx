import AboutMeSection from "@/components/home/AboutMe-section";
import ContactDetailsSection from "@/components/home/ContactDetails-section";
import FooterSection from "@/components/home/Footer-section";
import ProjectsSection from "@/components/home/projects-section";
import WelcomeSection from "@/components/home/Welcome-section";

export default function RootRoute() {
    return (
        <main className="bg-pattern grid gap-4 lg:p-8 p-4 transition-all duration-200 ease-in-out">
            <WelcomeSection />
            <AboutMeSection />
            <ContactDetailsSection />
            <ProjectsSection />
            <FooterSection />
        </main>
    );
}
