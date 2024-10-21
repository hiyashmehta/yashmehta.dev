import Home from "@/components/home";
import { CareerTimeline } from "@/components/home/career-timeline";
import ProjectsGrid from "@/components/shared/projects";
import { ModeToggle } from "@/components/theme-switch";

export default function HomePage() {
	return (
		<main>
			<Home />
			<CareerTimeline />
			<ProjectsGrid />
		</main>
	);
}
