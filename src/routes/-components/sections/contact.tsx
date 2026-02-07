import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
import * as z from "zod"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters.").max(50),
    email: z.string().email("Please enter a valid email address."),
    message: z.string().min(5, "Message must be at least 5 characters.").max(1000, "Message is too long."),
})

export default function ContactSection({ ...props }: React.ComponentProps<"section">) {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            try {
                // TODO: replace with real API
                await new Promise((r) => setTimeout(r, 1000))

                toast.success("Message sent!", {
                    description: "Thanks for reaching out. I’ll get back to you shortly.",
                    position: "bottom-right",
                })

                form.reset()
            } catch {
                toast.error("Something went wrong", {
                    description: "Please try again or email me directly.",
                })
            }
        },
    })

    return (
        <section className={cn("max-w-(--breakpoint-xl) mx-auto px-6 py-24", props.className)} {...props}>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* LEFT */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let’s build something great.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I'm always interested in new opportunities and exciting <strong>projects</strong>. Whether
                            you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <a href="mailto:hgaur491@gmail.com" className="text-lg font-semibold hover:underline">
                                    hgaur491@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <a href="mailto:hgaur491@gmail.com" className="text-lg font-semibold hover:underline">
                                    +91 9310745921
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="text-lg font-semibold">Delhi, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Send a message</CardTitle>
                        <CardDescription>I usually reply within 24 hours.</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form
                            id="contact-form"
                            onSubmit={(e) => {
                                e.preventDefault()
                                form.handleSubmit()
                            }}
                            className="space-y-6"
                        >
                            <form.Field name="name">
                                {(field) => (
                                    <Field>
                                        <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                                        <Input
                                            id={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="John Doe"
                                        />
                                        <FieldError errors={field.state.meta.errors} />
                                    </Field>
                                )}
                            </form.Field>

                            <form.Field name="email">
                                {(field) => (
                                    <Field>
                                        <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
                                        <Input
                                            id={field.name}
                                            type="email"
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="john@company.com"
                                        />
                                        <FieldError errors={field.state.meta.errors} />
                                    </Field>
                                )}
                            </form.Field>

                            <form.Field name="message">
                                {(field) => (
                                    <Field>
                                        <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                                        <InputGroup>
                                            <InputGroupTextarea
                                                id={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="Hi Harsh, we’d like to discuss a role or project involving…"
                                                rows={5}
                                                className="resize-none"
                                            />
                                            <InputGroupAddon align="block-end">
                                                <InputGroupText className="text-[10px] font-bold">
                                                    {field.state.value.length}
                                                    /1000
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        <FieldDescription>
                                            Share a few details about the role, project, or idea.
                                        </FieldDescription>
                                        <FieldError errors={field.state.meta.errors} />
                                    </Field>
                                )}
                            </form.Field>
                        </form>
                    </CardContent>

                    <CardFooter>
                        <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
                            {([canSubmit, isSubmitting]) => (
                                <Button
                                    type="submit"
                                    form="contact-form"
                                    className="w-full gap-2 h-12"
                                    disabled={!canSubmit || isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" />
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send />
                                        </>
                                    )}
                                </Button>
                            )}
                        </form.Subscribe>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}
