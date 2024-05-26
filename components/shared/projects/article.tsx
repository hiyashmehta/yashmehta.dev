import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Article = ({ project }: { project: any }) => {
	return (
		// <Link href={`/projects/${project?.slug}`}>
		<article className="p-4 md:p-8">
			<div className="py-4">
				<Image
					src={project.previewImage}
					alt="preview image"
					width={600}
					height={400}
					className="rounded-md"
				/>
			</div>
			<div className="flex items-center justify-between">
				{" "}
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project?.title}
				</h2>
				<span className="text-xs mb-2 duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
					{project?.date ? (
						<time dateTime={new Date(project.date).toISOString()}>
							{Intl.DateTimeFormat(undefined, {
								dateStyle: "medium",
							}).format(new Date(project.date))}
						</time>
					) : (
						<span>SOON</span>
					)}
				</span>
			</div>
			<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
				{project?.description}
			</p>
			<div className="mt-4 flex gap-8 items-center flex-wrap">
				{project.link && (
					<div className=" ">
						<a
							href={project.link}
							className="hidden text-zinc-200 hover:text-zinc-50 lg:block"
						>
							View Website <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				)}
				{/* {project.images && <Button>Preview Images</Button>} */}
				{project.githubURL && (
					<Button asChild>
						<a
							href={project.githubURL}
							target="_blank"
							className="pointer"
						>
							Github
						</a>
					</Button>
				)}
			</div>
		</article>
		// </Link>
	);
};
