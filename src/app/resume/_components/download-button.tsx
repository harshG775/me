"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
export default function DownloadButton() {
    return (
        <Button onClick={() => window.print()} size="lg" className="h-12 px-5 font-medium text-base gap-2">
            <Download className="w-5 h-5" />
            Download
        </Button>
    );
}
