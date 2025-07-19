import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact({ ...props }: React.ComponentProps<"section">) {
    return (
        <section {...props} className="py-20 relative">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-20 w-36 h-36 bg-primary/10 organic-shape animate-float"></div>
                <div className="absolute bottom-32 right-16 w-28 h-28 bg-accent/20 organic-shape-2 animate-pulse-soft"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-chart-2/5 to-chart-4/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Get In Touch</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Let&apos;s work together</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    I&apos;m always interested in new opportunities and exciting projects. Whether you
                                    have a question or just want to say hi, I&apos;ll try my best to get back to you!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground">hgaur491@gmail.com</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground">+91 9310745921</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-muted-foreground">Delhi, India</span>
                                </div>
                            </div>
                        </div>

                        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                            <CardHeader>
                                <CardTitle>Send me a message</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <Input placeholder="First Name" className="bg-background/50" />
                                    <Input placeholder="Last Name" className="bg-background/50" />
                                </div>
                                <Input placeholder="Email" type="email" className="bg-background/50" />
                                <Input placeholder="Subject" className="bg-background/50" />
                                <Textarea
                                    placeholder="Your message..."
                                    rows={5}
                                    className="bg-background/50 resize-none"
                                />
                                <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
