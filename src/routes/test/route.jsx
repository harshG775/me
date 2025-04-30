import "./test.css";
export default function TestRoute() {
    return (
        <div className="bg-pattern h-screen p-4 lg">
            <main className="grid gap-2 content-main max-w-7xl mx-auto">
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-1" }}>
                    1
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-2" }}>
                    2
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-3" }}>
                    3
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-4" }}>
                    4
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-5" }}>
                    5
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-6" }}>
                    6
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-7" }}>
                    7
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-8" }}>
                    8
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-9" }}>
                    9
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-10" }}>
                    10
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-11" }}>
                    11
                </div>
                <div className="content-item p-2 border bg-background/80 rounded-lg" style={{ gridArea: "box-12" }}>
                    12
                </div>
            </main>
        </div>
    );
}
