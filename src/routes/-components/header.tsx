export function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 p-2">
            <header className="mx-auto w-full max-w-5xl h-10 flex items-center justify-between gap-2">
                <a href="#top">
                    <img src="/logo.svg" alt="portfolio logo" className="size-10" />
                </a>
                <nav aria-label="Primary" className="h-full flex justify-center">
                    <a href="#work" className="bg-mist-50 h-full content-center px-2.5 font-medium text-mist-700">
                        <span>Work</span>
                    </a>
                    <a href="#experience" className="h-full content-center px-2.5 font-medium text-mist-700">
                        <span>Experience</span>
                    </a>
                    <a href="#about" className="h-full content-center px-2.5 font-medium text-mist-700">
                        <span>About</span>
                    </a>
                    <a href="#skills" className="h-full content-center px-2.5 font-medium text-mist-700">
                        <span>Skills</span>
                    </a>
                    <a href="#contact" className="h-full content-center px-2.5 font-medium text-mist-700">
                        <span>Contact</span>
                    </a>
                </nav>
                <div>---</div>
            </header>
        </div>
    );
}
