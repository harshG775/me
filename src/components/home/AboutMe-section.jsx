import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutMeSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>Hi, I'm Harsh — a frontend software developer from India.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="text-muted-foreground text-sm">
                    <h3 className="font-medium text-primary mb-2">Primary Tools</h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-inside list-disc [&>li]:ml-4">
                        <li>React / Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Redux / Zustand</li>
                        <li>Webpack / Vite</li>
                        <li>Node.js / Express.js</li>
                        <li>Flask</li>
                        <li>REST / GraphQL</li>
                        <li>WebSockets</li>
                        <li>MongoDB</li>
                        <li>PostgreSQL</li>
                        <li>Redis</li>
                        <li>OpenAI API</li>
                        <li>Groq SDK</li>
                        <li>Speech Recognition</li>
                    </ul>
                </div>
                <p className="italic text-sm text-foreground/80">
                    Beyond the Code, I'm also passionate about design, illustration, animation, and 3D modeling.
                    Traveling energizes me, and I collect vintage passports — each one a tiny time capsule of global
                    history.
                </p>
            </CardContent>
        </Card>
    );
}
