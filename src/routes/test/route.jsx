// bento grid
import WelcomeSection from "@/components/home/Welcome-section";
import "./test.css";
import FooterSection from "@/components/home/Footer-section";
import AboutMeSection from "@/components/home/AboutMe-section";
export default function TestRoute() {
    return (
        <div className="bg-pattern min-h-screen w-full flex items-center justify-center p-4 lg">
            <main className="content-main grid gap-2 h-full w-full  max-w-7xl mx-auto">
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-1" }}>
                    <WelcomeSection />
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-2" }}>
                    <AboutMeSection />
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-3" }}>
                    3
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-4" }}>
                    4
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-5" }}>
                    5
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-6" }}>
                    6
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-7" }}>
                    7
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-8" }}>
                    8
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-9" }}>
                    9
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-10" }}>
                    10
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-11" }}>
                    11
                </div>
                <div className="bg-background/80 rounded-lg" style={{ gridArea: "box-12" }}>
                    <FooterSection />
                </div>
            </main>
        </div>
    );
}
