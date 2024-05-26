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
			<DialogContent className="w-[800px]">
				<h1>{projectName}</h1>
				<Carousel className="w-full max-w-xs h-full mx-auto">
					<CarouselContent>
						{images.map((item, index) => (
							<CarouselItem key={index} className="h-full">
								<Image
									src={item}
									alt="image"
									width={800}
									height={640}
									className="rounded-md h-full w-full"
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
