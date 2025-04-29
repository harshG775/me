import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMeSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>Hi, I'm Harsh — a frontend software developer from India.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-6 mt-4 text-muted-foreground text-sm">
                    <div>
                        <h3 className="font-medium text-primary mb-2"> My Primary Tools of Choice</h3>
                        <ul className="list-disc list-inside [&>li]:mt-1">
                            <li>React / Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Redux / Zustand</li>
                            <li>Webpack / Vite</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4 text-muted-foreground text-sm">
                    <div>
                        <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                        <ul className="list-disc list-inside [&>li]:mt-1">
                            <li>React / Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Redux / Zustand</li>
                            <li>Webpack / Vite</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary mb-2">Backend</h4>
                        <ul className="list-disc list-inside [&>li]:mt-1">
                            <li>Node.js / Express.js</li>
                            <li>Flask</li>
                            <li>REST / GraphQL</li>
                            <li>WebSockets</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary mb-2">Databases</h4>
                        <ul className="list-disc list-inside [&>li]:mt-1">
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                            <li>Redis</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary mb-2">AI / ML</h4>
                        <ul className="list-disc list-inside [&>li]:mt-1">
                            <li>OpenAI API</li>
                            <li>Groq SDK</li>
                            <li>Speech Recognition</li>
                        </ul>
                    </div>
                </div>

                <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">Beyond the Code</h3>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    I'm also passionate about design, illustration, animation, and 3D modeling. Traveling energizes me,
                    and I collect vintage passports — each one a tiny time capsule of global history.
                </p>
            </CardContent>
        </Card>
    );
}
