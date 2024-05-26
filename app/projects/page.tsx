import ProjectsGrid from "@/components/shared/projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Projects built by me",
};

export default function ProjectsPage() {
	return (
		<div>
			<ProjectsGrid />
		</div>
	);
}
