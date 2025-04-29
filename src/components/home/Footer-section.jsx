import { Card, CardFooter } from "@/components/ui/card";

export default function FooterSection() {
    const year = new Date().getFullYear();

    return (
        <Card>
            <CardFooter>
                © {year} · Crafted with ♥️ using
                <a href="https://vite.dev/guide/" target="_blank" className="text-primary px-1">
                    React.js + Vite
                </a>
                by Harsh.
            </CardFooter>
        </Card>
    );
}
