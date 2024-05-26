import Home from "@/components/home";
import ProjectsGrid from "@/components/shared/projects";
import { ModeToggle } from "@/components/theme-switch";

export default function HomePage() {
	return (
		<main>
			<Home />
			<ProjectsGrid />
		</main>
	);
}
