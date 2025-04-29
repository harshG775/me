import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MailIcon, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const contacts = [
    {
        name: "Email",
        url: "mailto:hgaur491@gmail.com",
        type: "1",
        icon: {
            Icon: MailIcon,
            color: "#181717",
        },
    },
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

export default function ContactDetailsSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Let's start working together!</CardTitle>
                <CardDescription>
                    <div className="italic">Contact Details</div>
                    <div className="font-semibold italic text-foreground">hgaur491@gmail.com</div>
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <div>
                    <h3 className="mb-4 text-lg font-semibold">Socials</h3>
                    <TooltipProvider delayDuration={300}>
                        <ul className="grid gap-4 sm:grid-cols-3">
                            {contacts.map((contact) => (
                                <li key={contact.name}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="group w-full justify-start gap-3 border-2 py-6 transition-all hover:bg-muted/50"
                                                asChild
                                            >
                                                <a
                                                    href={contact.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Connect on ${contact.name}`}
                                                >
                                                    <contact.icon.Icon
                                                        className="h-5 w-5"
                                                        style={{ color: contact.icon.color }}
                                                    />
                                                    <span className="font-medium">{contact.name}</span>
                                                    <ExternalLink className="ml-auto h-4 w-4 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300" />
                                                </a>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Connect on {contact.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    </TooltipProvider>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                        vision.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
