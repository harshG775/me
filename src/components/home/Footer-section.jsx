import { Card, CardFooter } from "@/components/ui/card";

export default function FooterSection() {
    const year = new Date().getFullYear();

    return (
        <Card>
            <CardFooter className="block text-center">
                © {year} · Crafted with ♥️ using
                <a href="https://vite.dev/guide/" target="_blank" className="inline text-rose-500 px-1">
                    React.js+Vite
                </a>
                by Harsh.
            </CardFooter>
        </Card>
    );
}
