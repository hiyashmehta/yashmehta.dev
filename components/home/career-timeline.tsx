import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function CareerTimeline() {
	const data = [
		{
			title: "Mishtu's Technology Solutions",
			content: (
				<div>
					<h1>
						I&apos;m Working as a Software Developer at Mishtus
						Technology Solutions and buidling appplications with
						React, Redux, Typescript,
					</h1>
					<div className="grid grid-cols-2 gap-4 md:text-sm">
						<p>
							<span>January 2023 - Present</span>
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Bharti Airtel",
			content: (
				<div>
					<p className="mb-8 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-lg">
						I worked as an Accounts manager at Bharti Airtel and
						managed the business clients{" "}
					</p>

					<div className="grid grid-cols-2 gap-4 md:text-sm">
						<p>
							<span>April 2021 - Feb 2023</span>
						</p>
					</div>
				</div>
			),
		},
		{
			title: "Asian paints",
			content: (
				<div>
					<p className="mb-4 text-sm font-normal text-neutral-800 dark:text-neutral-200 md:text-lg">
						Worked as Direct Sales Representative
					</p>
					<div className="grid grid-cols-2 gap-4 md:text-sm">
						<p>
							<span>December 2018 - April 2021</span>
						</p>
					</div>
				</div>
			),
		},
	];
	return (
		<div className="w-full">
			<Timeline
				data={data}
				title={"Career Timeline"}
				description={"Here's a timeline of my career so far."}
			/>
		</div>
	);
}
