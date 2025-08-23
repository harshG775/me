import type { Metadata } from "next";
import { Merriweather, Montserrat, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

// Primary UI font
const montserrat = Montserrat({
    variable: "--font-primary",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

// Secondary / headings font
const merriweather = Merriweather({
    variable: "--font-secondary",
    subsets: ["latin"],
    weight: ["400", "700"],
});

// Code / monospace font
const ubuntuMonoFont = Ubuntu_Mono({
    variable: "--font-code",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Harsh G",
    description: "Harsh",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
            <body className={`${montserrat.variable} ${merriweather.variable} ${ubuntuMonoFont.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
