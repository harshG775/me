import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router";

export default function ProjectsSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Project</CardTitle>
            </CardHeader>
            <CardContent>
                <Link to="/projects">Projects</Link>
            </CardContent>
        </Card>
    );
}
