import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import { Card } from "./card";
import Image from "next/image";

export default function ViewImagesDialog({
	projectName,
	images,
}: {
	projectName: string;
	images: string[];
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={"secondary"}>View images</Button>
			</DialogTrigger>
			<DialogContent className="w-11/12 min-w-max p-16">
				<h1 className="text-2xl font-semibold">{projectName} Images</h1>
				<Carousel className="w-max max-w-4xl h-full mx-auto">
					<CarouselContent>
						{images.map((item, index) => (
							<CarouselItem key={index}>
								<Image
									src={item}
									alt="image"
									width={4800}
									height={4000}
									className="rounded-3xl h-max w-min object-cover"
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</DialogContent>
		</Dialog>
	);
}
