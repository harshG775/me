import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    // Clean existing data
    await prisma.contact.deleteMany();
    await prisma.experience.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.project.deleteMany();
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();

    // Create User
    const hashedPassword = await bcrypt.hash("admin1234", 10);

    const user = await prisma.user.create({
        data: {
            email: "hgaur491@gmail.com",
            password: hashedPassword,
            name: "admin1234",
        },
    });

    // Create Profile
    const profile = await prisma.profile.create({
        data: {
            name: "Harsh",
            title: "Full Stack Developer",
            bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.",
            email: "hgaur491@gmail.com",
            phone: "+91 9310745921",
            location: "Delhi, IN",
            resumeUrl: "/resume.pdf",
            profileImage: "/profile.jpg",
            socialLinks: {
                github: "https://github.com/harshG775",
                linkedin: "https://linkedin.com/in/harshg775",
            },
        },
    });

    // Create Skills
    const frontendSkills = [
        { name: "React", level: 9 },
        { name: "Next.js", level: 8 },
        { name: "TypeScript", level: 8 },
        { name: "JavaScript", level: 9 },
        { name: "HTML/CSS", level: 9 },
        { name: "Tailwind CSS", level: 8 },
        { name: "Vue.js", level: 7 },
    ];

    const backendSkills = [
        { name: "Node.js", level: 8 },
        { name: "Express.js", level: 8 },
        { name: "Python", level: 7 },
        { name: "PostgreSQL", level: 8 },
        { name: "MongoDB", level: 7 },
        { name: "Prisma", level: 8 },
        { name: "GraphQL", level: 6 },
    ];

    const toolsSkills = [
        { name: "Git", level: 9 },
        { name: "Docker", level: 7 },
        { name: "AWS", level: 6 },
        { name: "Vercel", level: 8 },
        { name: "Figma", level: 6 },
        { name: "Jest", level: 7 },
    ];

    // Insert Frontend Skills
    for (let i = 0; i < frontendSkills.length; i++) {
        await prisma.skill.create({
            data: {
                ...frontendSkills[i],
                category: "Frontend",
                order: i,
            },
        });
    }

    // Insert Backend Skills
    for (let i = 0; i < backendSkills.length; i++) {
        await prisma.skill.create({
            data: {
                ...backendSkills[i],
                category: "Backend",
                order: i,
            },
        });
    }

    // Insert Tools Skills
    for (let i = 0; i < toolsSkills.length; i++) {
        await prisma.skill.create({
            data: {
                ...toolsSkills[i],
                category: "Tools",
                order: i,
            },
        });
    }

    // Create Projects
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-featured e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
            techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
            imageUrl: "/projects/ecommerce.jpg",
            liveUrl: "https://ecommerce-demo.vercel.app",
            githubUrl: "https://github.com/johndoe/ecommerce-platform",
            featured: true,
            order: 0,
        },
        {
            title: "Task Management App",
            description:
                "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js"],
            imageUrl: "/projects/taskapp.jpg",
            liveUrl: "https://taskapp-demo.herokuapp.com",
            githubUrl: "https://github.com/johndoe/task-management",
            featured: true,
            order: 1,
        },
        {
            title: "Weather Dashboard",
            description:
                "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
            techStack: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
            imageUrl: "/projects/weather.jpg",
            liveUrl: "https://weather-dash.netlify.app",
            githubUrl: "https://github.com/johndoe/weather-dashboard",
            featured: false,
            order: 2,
        },
        {
            title: "Social Media Dashboard",
            description:
                "Analytics dashboard for social media managers to track engagement across multiple platforms with automated reporting features.",
            techStack: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
            imageUrl: "/projects/social-dashboard.jpg",
            liveUrl: "https://social-analytics.vercel.app",
            githubUrl: "https://github.com/johndoe/social-dashboard",
            featured: false,
            order: 3,
        },
        {
            title: "Fitness Tracker",
            description:
                "Mobile-first fitness tracking application with workout logging, progress visualization, and goal setting capabilities.",
            techStack: ["React Native", "Firebase", "Redux", "Chart.js"],
            imageUrl: "/projects/fitness.jpg",
            githubUrl: "https://github.com/johndoe/fitness-tracker",
            featured: false,
            order: 4,
        },
    ];

    for (const project of projects) {
        await prisma.project.create({
            data: project,
        });
    }

    // Create Experience
    const experiences = [
        {
            company: "TechCorp Solutions",
            position: "Senior Full Stack Developer",
            description:
                "Led development of enterprise-level web applications serving 100k+ users. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.",
            startDate: new Date("2022-01-15"),
            current: true,
            order: 0,
        },
        {
            company: "StartupXYZ",
            position: "Full Stack Developer",
            description:
                "Built the core platform from scratch using React and Node.js. Implemented real-time features and optimized database queries, improving application performance by 40%.",
            startDate: new Date("2020-03-01"),
            endDate: new Date("2021-12-31"),
            current: false,
            order: 1,
        },
        {
            company: "WebDev Agency",
            position: "Frontend Developer",
            description:
                "Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UI/UX designs and improved page load times by 30%.",
            startDate: new Date("2019-06-01"),
            endDate: new Date("2020-02-28"),
            current: false,
            order: 2,
        },
        {
            company: "Freelance",
            position: "Web Developer",
            description:
                "Provided web development services to small businesses and startups. Built custom WordPress themes and developed e-commerce solutions.",
            startDate: new Date("2018-01-01"),
            endDate: new Date("2019-05-31"),
            current: false,
            order: 3,
        },
    ];

    for (const experience of experiences) {
        await prisma.experience.create({
            data: experience,
        });
    }

    // Create Sample Contacts
    const contacts = [
        {
            name: "Sarah Johnson",
            email: "sarah.johnson@email.com",
            message:
                "Hi John! I came across your portfolio and I'm impressed by your work. We have an exciting opportunity at our startup that might interest you. Would you be available for a quick call this week?",
            read: false,
        },
        {
            name: "Mike Chen",
            email: "mike.chen@techcompany.com",
            message:
                "Hello, I'm a recruiter at TechCompany and we're looking for talented full-stack developers. Your experience with React and Node.js caught our attention. Let's discuss potential opportunities.",
            read: true,
        },
        {
            name: "Emily Rodriguez",
            email: "emily@designstudio.com",
            message:
                "Love your portfolio design! We're a design studio looking for a developer to collaborate on client projects. Would you be interested in freelance work?",
            read: false,
        },
    ];

    for (const contact of contacts) {
        await prisma.contact.create({
            data: contact,
        });
    }

    console.log("Database seeded successfully!");
    console.log(`Created:`);
    console.log(`- 1 user`);
    console.log(`- 1 profile`);
    console.log(`- ${frontendSkills.length + backendSkills.length + toolsSkills.length} skills`);
    console.log(`- ${projects.length} projects`);
    console.log(`- ${experiences.length} experiences`);
    console.log(`- ${contacts.length} contacts`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
