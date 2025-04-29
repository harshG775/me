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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

export default function WelcomeSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={"text-muted-foreground italic"}>welcome</CardTitle>
            </CardHeader>
            <CardContent className={"space-y-10"}>
                <div>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Hi, I'm <span className="inline-block text-primary/80">Harsh gaur</span>, a software developer
                        with strong focus on the user experience, user interface and micro interactions.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Feel free to reach out to me if you have any projects in mind, or just to say hello.
                    </p>
                </div>
                <ul className="flex flex-wrap gap-4">
                    {contacts.map((contact) => (
                        <li key={contact.name}>
                            <Link
                                to={contact.url}
                                className="hover:scale-110 flex gap-2 [&_svg]:size-6 p-2 rounded-md text-primary bg-primary-foreground/50 hover:bg-primary-foreground transition-all duration-200 ease-in-out"
                            >
                                <contact.icon.Icon />
                                <div className="sr-only">{contact.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
