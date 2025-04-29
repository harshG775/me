import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Link } from "react-router";

const contacts = [
    {
        name: "GitHub",
        url: "https://github.com/harshG775",
        type: "1",
        icon: {
            Icon: Github,
            color: "#181717",
        },
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshg775",
        type: "1",
        icon: {
            Icon: Linkedin,
            color: "#0072b1",
        },
    },
];

export default function RootRoute() {
    return (
        <main className="grid gap-4 p-14">
            <Card>
                <CardHeader>
                    <CardTitle className={"text-muted-foreground italic"}>welcome</CardTitle>
                </CardHeader>
                <CardContent className={"space-y-4"}>
                    <div>
                        Hi, I'm <h1 className="inline text-primary/80">Harsh gaur</h1>, a software developer with strong focus on the
                        user experience, user interface and micro interactions.
                    </div>
                    <div>Feel free to reach out to me if you have any projects in mind, or just to say hello.</div>
                    <ul className="flex flex-wrap gap-4 py-2">
                        {contacts.map((contact) => (
                            <li key={contact.name}>
                                <Link
                                    to={contact.url}
                                    className="flex gap-2 bg-primary [&_svg]:size-8 p-1 rounded-md text-primary-foreground"
                                >
                                    <contact.icon.Icon />
                                    <div className="sr-only">{contact.name}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>about me</CardTitle>
                    <CardDescription>Hi, I'm Harsh, a front-end software developer from India.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <h3>My primary tools of choice includes</h3>
                        <ul>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div>
                        Beyond coding, I'm passionate about design, illustration, animation and 3D modelling and
                        traveling. An unusual hobby of mine is collecting vintage passports, they're interesting pieces
                        of history to me.
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Let's start working together!</CardTitle>
                    <CardDescription>
                        <div className="italic">Contact Details</div>
                        <div className="font-semibold italic text-foreground">hgaur491@gmail.com</div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <div>Socials</div>
                        <ul>
                            <li>
                                <Link to="">Linkedin</Link>
                            </li>
                            <li>
                                <Link to="">Github</Link>
                            </li>
                            <li>
                                <Link to="">Medium</Link>
                            </li>
                            <li>
                                <Link to="">Discord</Link>
                            </li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    {/* Roles at Metis Eduventures / Adda247 and ItaxEasy :contentReference[oaicite:2]{index=2}&#8203;:contentReference[oaicite:3]{index=3} */}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <Link to="/projects">Projects</Link>
                </CardContent>
            </Card>

            <Card>
                <CardFooter>© 2025 · Crafted with ♥️ using React.js by Harsh.</CardFooter>
            </Card>
        </main>
    );
}
