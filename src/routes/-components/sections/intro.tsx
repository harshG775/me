import { motion as M } from "motion/react"
import { Link } from "@tanstack/react-router"
import { Download, GithubIcon, LinkedinIcon, LucideArrowRight } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip.tsx"

export default function IntroSection() {
    const OWNER_NAME = "Harsh"

    return (
        <section className="relative z-10 max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center">
                <div className="relative">
                    <M.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <img
                            // src="/profile.png"
                            src="https://media.licdn.com/dms/image/v2/D5603AQGMIt9PZgGNZQ/profile-displayphoto-crop_800_800/B56ZvMVIWyGsAM-/0/1768659654789?e=1772064000&v=beta&t=hn4Pq2ovf3TOUmG2FggHtOq5hyS3SG6f1FlNwMcIIlo"
                            alt={`${OWNER_NAME.split(" ")[0]} portrait`}
                            width={192}
                            height={192}
                            className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </M.div>

                    {/* <M.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                        className="absolute text-2xl bottom-0 right-0"
                    >
                        👋
                    </M.span> */}
                </div>
            </div>
            <M.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium leading-normal! sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <b className="font-bold">Hi, I&apos;m {OWNER_NAME.split(" ")[0]}.</b> I&apos;m a{" "}
                <b className="font-bold">Frontend softwere developer</b> with <b className="font-bold">2+ years</b> of
                experience. I enjoy building <i className="italic">sites and apps</i>. My focus is{" "}
                <u className="underline">React (Next.js)</u>.
            </M.h1>
            {/* <p className="mt-6 text-foreground/80 md:text-lg">
                            I'm a passionate web developer crafting beautiful, functional experiences that bring ideas to
                            life through code.
                        </p> */}
            <TooltipProvider>
                <M.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-4"
                >
                    <Button asChild size="lg" variant="default">
                        <Link to="/" hash={"contact"}>
                            Contact Me
                            <LucideArrowRight className="h-5! w-5!" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link to="/resume">
                            My Resume
                            <Download className="h-5! w-5!" />
                        </Link>
                    </Button>
                    <div className="flex gap-4">
                        <Tooltip>
                            <TooltipTrigger asChild className={buttonVariants({ variant: "outline", size: "icon-lg" })}>
                                <a
                                    href="https://github.com/harshG775"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="p-3"
                                >
                                    <GithubIcon className="h-5 w-5 hover:text-foreground transition-colors" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>GitHub</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild className={buttonVariants({ variant: "outline", size: "icon-lg" })}>
                                <a
                                    href="https://www.linkedin.com/in/harshg775"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="p-3"
                                >
                                    <LinkedinIcon className="h-5 w-5 hover:text-foreground transition-colors" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>LinkedIn</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </M.div>
            </TooltipProvider>
        </section>
    )
}
