import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Save, Eye, Edit3 } from "lucide-react"

export const Route = createFileRoute("/resumes/$resume_id")({
    component: RouteComponent,
})

interface ResumeData {
    metadata: {
        title: string
        description: string
    }
    name: string
    title: string
    contact: {
        location: string
        email: string
        phone: string
        github: string
        linkedin: string
    }
    summary: string
    experience: Array<{
        title: string
        company: string
        location: string
        period: string
        links: string[]
        points: string[]
    }>
    projects: Array<{
        name: string
        stack: string
        links: string[]
        points: string[]
    }>
    skills: {
        frontend: string[]
        backend: string[]
        databases: string[]
        tools: string[]
        testing: string[]
        integrations: string[]
        architecture: string[]
    }
    education: Array<{
        degree: string
        institution: string
        date: string
    }>
    certifications: string[]
    atsKeywords: string[]
}

const defaultResumeData: ResumeData = {
    metadata: {
        title: "Harsh_WebDeveloper_Resume",
        description: "ATS-optimized resume of Harsh Gaur for Frontend / Full Stack Developer roles.",
    },
    name: "Harsh Gaur",
    title: "Frontend / Full Stack Developer - React.js | Next.js | MERN Stack",
    contact: {
        location: "Delhi, India",
        email: "hgaur491@gmail.com",
        phone: "+91 9310745921",
        github: "github.com/harshG775",
        linkedin: "linkedin.com/in/harshg775",
    },
    summary: `Frontend-focused Full Stack Developer with 2+ years of hands-on experience building scalable, high-performing SaaS and AI-powered platforms using Next.js, React.js, and the MERN stack. Skilled in UI development, performance optimization, and building accessible, maintainable interfaces. Also experienced in guiding and mentoring two frontend interns.`,
    experience: [
        {
            title: "Frontend Developer",
            company: "Prabhubhakti (Spiritual SaaS Platform)",
            location: "Gurugram",
            period: "Jun 2025 - Present",
            links: ["http://prabhubhakti.io", "http://prabhubhakti.com"],
            points: [
                "Built Prabhubhakti's landing and SaaS website using Next.js, Tailwind CSS, and Framer Motion, achieving 95+ SEO scores and a 40% increase in organic traffic.",
                "Contributed to a multi-tenant SaaS platform with domain/subdomain routing, wallet system, and Razorpay integration.",
                "Launched 2 astrologer storefronts (astrodrpc.com, divinetwinsoul.com) within 2 months, reducing onboarding time by 70%.",
                "Guided and supported two frontend interns to maintain code quality and consistency.",
            ],
        },
    ],
    projects: [
        {
            name: "SupportDesk - AI-Powered Customer Support Tool",
            stack: "React.js, Zustand, Flask, OpenAI API, WebSockets",
            links: ["https://supportdesk.adda247.com/"],
            points: [
                "Built an internal AI-assisted dashboard that eliminated the need for a third-party support tool, saving ₹2L+/year.",
                "Integrated real-time chat fallback logic and multi-step scripted bot responses via WebSocket channels.",
            ],
        },
    ],
    skills: {
        frontend: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "Zustand",
            "Redux",
            "Tailwind CSS",
            "ShadCN",
            "Framer Motion",
            "HTML5",
            "CSS3",
        ],
        backend: ["Node.js", "Express.js", "Flask", "REST APIs", "GraphQL", "WebSockets", "JWT"],
        databases: ["MongoDB", "PostgreSQL", "Prisma", "Redis"],
        tools: ["Git", "GitHub", "Vite", "Webpack", "Postman", "Docker (basic)"],
        testing: ["vitest", "Jest", "React Testing Library"],
        integrations: ["Razorpay", "OpenAI", "Whisper", "@next/third-parties"],
        architecture: ["Multi-Tenant SaaS", "SSR", "CSR", "Domain Routing", "Wallet Systems"],
    },
    education: [
        {
            degree: "Master of Computer Applications",
            institution: "Indra Gandhi National Open University (IGNOU)",
            date: "2025 - present",
        },
    ],
    certifications: ["Web Development Certification - MyCodeLearning (2023)"],
    atsKeywords: ["Frontend Developer", "Full Stack Developer", "MERN Stack", "React.js", "Next.js"],
}

function RouteComponent() {
    const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData)
    const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit")

    const updateContact = (field: keyof ResumeData["contact"], value: string) => {
        setResumeData((prev) => ({
            ...prev,
            contact: { ...prev.contact, [field]: value },
        }))
    }

    const addExperience = () => {
        setResumeData((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    title: "",
                    company: "",
                    location: "",
                    period: "",
                    links: [],
                    points: [""],
                },
            ],
        }))
    }

    const updateExperience = (index: number, field: string, value: any) => {
        setResumeData((prev) => ({
            ...prev,
            experience: prev.experience.map((exp, i) => (i === index ? { ...exp, [field]: value } : exp)),
        }))
    }

    const addProject = () => {
        setResumeData((prev) => ({
            ...prev,
            projects: [
                ...prev.projects,
                {
                    name: "",
                    stack: "",
                    links: [],
                    points: [""],
                },
            ],
        }))
    }

    const updateProject = (index: number, field: string, value: any) => {
        setResumeData((prev) => ({
            ...prev,
            projects: prev.projects.map((proj, i) => (i === index ? { ...proj, [field]: value } : proj)),
        }))
    }

    const addEducation = () => {
        setResumeData((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    degree: "",
                    institution: "",
                    date: "",
                },
            ],
        }))
    }

    const updateEducation = (index: number, field: string, value: string) => {
        setResumeData((prev) => ({
            ...prev,
            education: prev.education.map((edu, i) => (i === index ? { ...edu, [field]: value } : edu)),
        }))
    }

    const addSkill = (category: keyof ResumeData["skills"], skill: string) => {
        setResumeData((prev) => ({
            ...prev,
            skills: {
                ...prev.skills,
                [category]: [...prev.skills[category], skill],
            },
        }))
    }

    const removeSkill = (category: keyof ResumeData["skills"], index: number) => {
        setResumeData((prev) => ({
            ...prev,
            skills: {
                ...prev.skills,
                [category]: prev.skills[category].filter((_, i) => i !== index),
            },
        }))
    }

    const handleSave = () => {
        console.log("Saving resume data:", resumeData)
        // TODO: Implement save functionality (API call, localStorage, etc.)
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                            ← Back
                        </Button>
                        <h1 className="text-xl font-semibold">Resume Editor</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant={activeTab === "edit" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveTab("edit")}
                            className="gap-2"
                        >
                            <Edit3 className="h-4 w-4" />
                            Edit
                        </Button>
                        <Button
                            variant={activeTab === "preview" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveTab("preview")}
                            className="gap-2"
                        >
                            <Eye className="h-4 w-4" />
                            Preview
                        </Button>
                        <Button onClick={handleSave} className="gap-2">
                            <Save className="h-4 w-4" />
                            Save
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-6">
                {activeTab === "edit" ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Sidebar - Editor */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Personal Info */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Personal Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium mb-1 block">Full Name</label>
                                        <Input
                                            value={resumeData.name}
                                            onChange={(e) =>
                                                setResumeData((prev) => ({ ...prev, name: e.target.value }))
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-1 block">Professional Title</label>
                                        <Input
                                            value={resumeData.title}
                                            onChange={(e) =>
                                                setResumeData((prev) => ({ ...prev, title: e.target.value }))
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-1 block">Email</label>
                                        <Input
                                            value={resumeData.contact.email}
                                            onChange={(e) => updateContact("email", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-1 block">Phone</label>
                                        <Input
                                            value={resumeData.contact.phone}
                                            onChange={(e) => updateContact("phone", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-1 block">Location</label>
                                        <Input
                                            value={resumeData.contact.location}
                                            onChange={(e) => updateContact("location", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-1 block">GitHub</label>
                                        <Input
                                            value={resumeData.contact.github}
                                            onChange={(e) => updateContact("github", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-1 block">LinkedIn</label>
                                        <Input
                                            value={resumeData.contact.linkedin}
                                            onChange={(e) => updateContact("linkedin", e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Summary */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Professional Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Textarea
                                        value={resumeData.summary}
                                        onChange={(e) =>
                                            setResumeData((prev) => ({ ...prev, summary: e.target.value }))
                                        }
                                        rows={6}
                                        className="resize-none"
                                    />
                                </CardContent>
                            </Card>

                            {/* Skills */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Skills</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {Object.entries(resumeData.skills).map(([category, skills]) => (
                                        <div key={category}>
                                            <label className="text-sm font-medium mb-2 block capitalize">
                                                {category}
                                            </label>
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {skills.map((skill, idx) => (
                                                    <Badge key={idx} variant="secondary" className="gap-1">
                                                        {skill}
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeSkill(category as keyof ResumeData["skills"], idx)
                                                            }
                                                            className="ml-1 hover:text-destructive"
                                                        >
                                                            ×
                                                        </button>
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex gap-2">
                                                <Input
                                                    placeholder={`Add ${category} skill`}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter" && e.currentTarget.value.trim()) {
                                                            addSkill(
                                                                category as keyof ResumeData["skills"],
                                                                e.currentTarget.value.trim(),
                                                            )
                                                            e.currentTarget.value = ""
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Education */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-lg">Education</CardTitle>
                                    <Button size="sm" variant="outline" onClick={addEducation}>
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {resumeData.education.map((edu, index) => (
                                        <div key={index} className="space-y-2 p-3 border rounded-lg relative">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="absolute right-2 top-2 h-8 w-8 p-0"
                                                onClick={() => {
                                                    setResumeData((prev) => ({
                                                        ...prev,
                                                        education: prev.education.filter((_, i) => i !== index),
                                                    }))
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                            <Input
                                                placeholder="Degree"
                                                value={edu.degree}
                                                onChange={(e) => updateEducation(index, "degree", e.target.value)}
                                            />
                                            <Input
                                                placeholder="Institution"
                                                value={edu.institution}
                                                onChange={(e) => updateEducation(index, "institution", e.target.value)}
                                            />
                                            <Input
                                                placeholder="Date"
                                                value={edu.date}
                                                onChange={(e) => updateEducation(index, "date", e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Certifications */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Certifications</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {resumeData.certifications.map((cert, index) => (
                                            <div key={index} className="flex gap-2">
                                                <Input
                                                    value={cert}
                                                    onChange={(e) => {
                                                        const newCerts = [...resumeData.certifications]
                                                        newCerts[index] = e.target.value
                                                        setResumeData((prev) => ({ ...prev, certifications: newCerts }))
                                                    }}
                                                />
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => {
                                                        setResumeData((prev) => ({
                                                            ...prev,
                                                            certifications: prev.certifications.filter(
                                                                (_, i) => i !== index,
                                                            ),
                                                        }))
                                                    }}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() =>
                                                setResumeData((prev) => ({
                                                    ...prev,
                                                    certifications: [...prev.certifications, ""],
                                                }))
                                            }
                                            className="w-full"
                                        >
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add Certification
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Side - Main Editor Area */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Experience */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-lg">Work Experience</CardTitle>
                                    <Button size="sm" onClick={addExperience}>
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Experience
                                    </Button>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {resumeData.experience.map((exp, index) => (
                                        <div key={index} className="space-y-4 p-4 border rounded-lg relative">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="absolute right-2 top-2 h-8 w-8 p-0"
                                                onClick={() => {
                                                    setResumeData((prev) => ({
                                                        ...prev,
                                                        experience: prev.experience.filter((_, i) => i !== index),
                                                    }))
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-sm font-medium mb-1 block">Job Title</label>
                                                    <Input
                                                        value={exp.title}
                                                        onChange={(e) =>
                                                            updateExperience(index, "title", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium mb-1 block">Company</label>
                                                    <Input
                                                        value={exp.company}
                                                        onChange={(e) =>
                                                            updateExperience(index, "company", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-sm font-medium mb-1 block">Location</label>
                                                    <Input
                                                        value={exp.location}
                                                        onChange={(e) =>
                                                            updateExperience(index, "location", e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium mb-1 block">Period</label>
                                                    <Input
                                                        value={exp.period}
                                                        onChange={(e) =>
                                                            updateExperience(index, "period", e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium mb-1 block">
                                                    Achievement Points
                                                </label>
                                                {exp.points.map((point, pointIndex) => (
                                                    <div key={pointIndex} className="flex gap-2 mb-2">
                                                        <Textarea
                                                            value={point}
                                                            onChange={(e) => {
                                                                const newPoints = [...exp.points]
                                                                newPoints[pointIndex] = e.target.value
                                                                updateExperience(index, "points", newPoints)
                                                            }}
                                                            rows={2}
                                                            className="resize-none flex-1"
                                                        />
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => {
                                                                const newPoints = exp.points.filter(
                                                                    (_, i) => i !== pointIndex,
                                                                )
                                                                updateExperience(index, "points", newPoints)
                                                            }}
                                                            className="self-start"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                ))}
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        updateExperience(index, "points", [...exp.points, ""])
                                                    }
                                                >
                                                    <Plus className="h-4 w-4 mr-2" />
                                                    Add Point
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Projects */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-lg">Projects</CardTitle>
                                    <Button size="sm" onClick={addProject}>
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Project
                                    </Button>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {resumeData.projects.map((project, index) => (
                                        <div key={index} className="space-y-4 p-4 border rounded-lg relative">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="absolute right-2 top-2 h-8 w-8 p-0"
                                                onClick={() => {
                                                    setResumeData((prev) => ({
                                                        ...prev,
                                                        projects: prev.projects.filter((_, i) => i !== index),
                                                    }))
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-sm font-medium mb-1 block">
                                                        Project Name
                                                    </label>
                                                    <Input
                                                        value={project.name}
                                                        onChange={(e) => updateProject(index, "name", e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium mb-1 block">Tech Stack</label>
                                                    <Input
                                                        value={project.stack}
                                                        onChange={(e) => updateProject(index, "stack", e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-sm font-medium mb-1 block">Project Points</label>
                                                {project.points.map((point, pointIndex) => (
                                                    <div key={pointIndex} className="flex gap-2 mb-2">
                                                        <Textarea
                                                            value={point}
                                                            onChange={(e) => {
                                                                const newPoints = [...project.points]
                                                                newPoints[pointIndex] = e.target.value
                                                                updateProject(index, "points", newPoints)
                                                            }}
                                                            rows={2}
                                                            className="resize-none flex-1"
                                                        />
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => {
                                                                const newPoints = project.points.filter(
                                                                    (_, i) => i !== pointIndex,
                                                                )
                                                                updateProject(index, "points", newPoints)
                                                            }}
                                                            className="self-start"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                ))}
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        updateProject(index, "points", [...project.points, ""])
                                                    }
                                                >
                                                    <Plus className="h-4 w-4 mr-2" />
                                                    Add Point
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* ATS Keywords */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">ATS Keywords</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {resumeData.atsKeywords.map((keyword, index) => (
                                            <Badge key={index} variant="outline" className="gap-1">
                                                {keyword}
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setResumeData((prev) => ({
                                                            ...prev,
                                                            atsKeywords: prev.atsKeywords.filter((_, i) => i !== index),
                                                        }))
                                                    }}
                                                    className="ml-1 hover:text-destructive"
                                                >
                                                    ×
                                                </button>
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <Input
                                            placeholder="Add ATS keyword"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" && e.currentTarget.value.trim()) {
                                                    setResumeData((prev) => ({
                                                        ...prev,
                                                        atsKeywords: [
                                                            ...prev.atsKeywords,
                                                            e.currentTarget.value.trim(),
                                                        ],
                                                    }))
                                                    e.currentTarget.value = ""
                                                }
                                            }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ) : (
                    /* Preview Mode */
                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardContent className="p-8">
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl font-bold mb-2">{resumeData.name}</h1>
                                    <p className="text-lg text-muted-foreground mb-4">{resumeData.title}</p>
                                    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                                        <span>{resumeData.contact.email}</span>
                                        <span>•</span>
                                        <span>{resumeData.contact.phone}</span>
                                        <span>•</span>
                                        <span>{resumeData.contact.location}</span>
                                        <span>•</span>
                                        <span>{resumeData.contact.github}</span>
                                        <span>•</span>
                                        <span>{resumeData.contact.linkedin}</span>
                                    </div>
                                </div>

                                <Separator className="mb-6" />

                                {/* Summary */}
                                <section className="mb-6">
                                    <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
                                    <p className="text-sm leading-relaxed whitespace-pre-line">{resumeData.summary}</p>
                                </section>

                                <Separator className="mb-6" />

                                {/* Experience */}
                                <section className="mb-6">
                                    <h2 className="text-lg font-semibold mb-4">Work Experience</h2>
                                    <div className="space-y-6">
                                        {resumeData.experience.map((exp, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="font-semibold">{exp.title}</h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {exp.company} | {exp.location}
                                                        </p>
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                                                </div>
                                                <ul className="list-disc list-inside space-y-1 text-sm">
                                                    {exp.points
                                                        .filter((p) => p.trim())
                                                        .map((point, pointIndex) => (
                                                            <li key={pointIndex} className="leading-relaxed">
                                                                {point}
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <Separator className="mb-6" />

                                {/* Projects */}
                                <section className="mb-6">
                                    <h2 className="text-lg font-semibold mb-4">Projects</h2>
                                    <div className="space-y-6">
                                        {resumeData.projects.map((project, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="font-semibold">{project.name}</h3>
                                                        <p className="text-sm text-muted-foreground">{project.stack}</p>
                                                    </div>
                                                </div>
                                                <ul className="list-disc list-inside space-y-1 text-sm">
                                                    {project.points
                                                        .filter((p) => p.trim())
                                                        .map((point, pointIndex) => (
                                                            <li key={pointIndex} className="leading-relaxed">
                                                                {point}
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <Separator className="mb-6" />

                                {/* Skills */}
                                <section className="mb-6">
                                    <h2 className="text-lg font-semibold mb-4">Skills</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {Object.entries(resumeData.skills).map(([category, skills]) => (
                                            <div key={category}>
                                                <h3 className="text-sm font-semibold mb-2 capitalize">{category}</h3>
                                                <div className="flex flex-wrap gap-1">
                                                    {skills.map((skill, idx) => (
                                                        <Badge key={idx} variant="secondary" className="text-xs">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <Separator className="mb-6" />

                                {/* Education */}
                                <section className="mb-6">
                                    <h2 className="text-lg font-semibold mb-4">Education</h2>
                                    <div className="space-y-4">
                                        {resumeData.education.map((edu, index) => (
                                            <div key={index} className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-semibold">{edu.degree}</h3>
                                                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                                </div>
                                                <span className="text-sm text-muted-foreground">{edu.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {resumeData.certifications.length > 0 && (
                                    <>
                                        <Separator className="mb-6" />
                                        <section className="mb-6">
                                            <h2 className="text-lg font-semibold mb-4">Certifications</h2>
                                            <div className="flex flex-wrap gap-2">
                                                {resumeData.certifications
                                                    .filter((c) => c.trim())
                                                    .map((cert, index) => (
                                                        <Badge key={index} variant="outline">
                                                            {cert}
                                                        </Badge>
                                                    ))}
                                            </div>
                                        </section>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}
