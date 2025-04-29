import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
    return (
        <Link to="/projects">
            <Card>
                <CardContent className={"flex items-center justify-between"}>
                    <span className="font-medium">Projects</span>
                    <ArrowUpRight className="size-12" />
                </CardContent>
            </Card>
        </Link>
    );
}
