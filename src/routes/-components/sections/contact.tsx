import { useState } from "react"
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
import * as z from "zod"
import { useForm } from "@tanstack/react-form"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(5).max(1000),
})

type Status = "idle" | "success" | "error"

export default function ContactSection({ ...props }: React.ComponentProps<"section">) {
    const [status, setStatus] = useState<Status>("idle")

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
            setStatus("idle")

            try {
                const formData = new FormData()
                formData.append("access_key", "a81fb54c-0703-4f4f-8e5d-0b5b73475f03")
                formData.append("name", value.name)
                formData.append("email", value.email)
                formData.append("message", value.message)

                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                })

                const data = await response.json()

                if (!data.success) throw new Error()

                setStatus("success")
                form.reset()
            } catch {
                setStatus("error")
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
                        <p className="text-lg text-muted-foreground">
                            Open to new opportunities and exciting projects.
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
                                <p className="text-lg font-semibold">+91 9310745921</p>
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

                    <CardContent className="space-y-4">
                        {status === "success" && (
                            <Alert className="border-green-500/30 bg-green-500/10">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <AlertTitle>Message sent</AlertTitle>
                                <AlertDescription>Thanks for reaching out. I’ll get back to you soon.</AlertDescription>
                            </Alert>
                        )}

                        {status === "error" && (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Something went wrong</AlertTitle>
                                <AlertDescription>Please try again later or email me directly.</AlertDescription>
                            </Alert>
                        )}

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
                                                rows={5}
                                                placeholder="Hi Harsh, we’d like to discuss a role or project…"
                                                className="resize-none"
                                            />
                                            <InputGroupAddon align="block-end">
                                                <InputGroupText className="text-[10px] font-bold">
                                                    {field.state.value.length}/1000
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                        <FieldDescription>A short message is perfect.</FieldDescription>
                                        <FieldError errors={field.state.meta.errors} />
                                    </Field>
                                )}
                            </form.Field>

                            {/* Honeypot */}
                            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />
                        </form>
                    </CardContent>

                    <CardFooter>
                        <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
                            {([canSubmit, isSubmitting]) => (
                                <Button
                                    type="submit"
                                    form="contact-form"
                                    className="w-full h-12 gap-2"
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
