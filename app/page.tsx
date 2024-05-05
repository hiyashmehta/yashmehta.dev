"use client";
import { ThreeDCardDemo } from "@/components/examples/3d-card-demo";
import { HeroHighlightDemo } from "@/components/examples/hero-highlight-demo";
import { NavbarDemo } from "@/components/examples/navbar-demo";
import { VortexDemoSecond } from "@/components/examples/vortex-demo-second";
import { WobbleCardDemo } from "@/components/examples/wobble-card-demo";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<HeroHighlightDemo />
			<NavbarDemo />
			<WobbleCardDemo />
			<VortexDemoSecond />
			<ThreeDCardDemo />
		</main>
	);
}
