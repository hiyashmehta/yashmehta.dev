"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.3,
		},
	},
};
const containerItem = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
	},
};

const Hero = ({}) => {
	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="mx-auto mb-10 mt-16 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0"
		>
			<div className="text-sm font-semibold text-white border max-w-[120px] mx-auto p-4 rounded-xl">
				Hi, I&apos;m Yash
			</div>

			<motion.h1
				variants={containerItem}
				data-testid="hero-text"
				className="mt-5 font-display dark:text-white/80 text-3xl font-bold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]"
			>
				a Software developer
			</motion.h1>
			<motion.h2
				variants={containerItem}
				className="mt-5 text-gray-600 dark:text-gray-400 sm:text-xl"
			>
				Building web applications with React, Next.JS, Tailwind CSS,
				Redux, Vercel, React Query, tRPC, and MySQL. I&apos;m building
				{/* Building web applications with React, Next.JS, Material UI,
				Tailwind CSS, Redux, Vercel, and PlanetScale. I&apos;m building{" "} */}
				<a
					className="font-semibold text-transparent text-blue-700 hover:underline underline-offset-2 bg-gradient-to-r from-blue-400 via-blue-500 to-violet-800 bg-clip-text"
					href="https://opppen.space"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					opppen.space
				</a>{" "}
				</motion.h2>

			<motion.div
				variants={containerItem}
				className="flex mx-auto mt-10 space-x-4 max-w-fit"
			>
				<a
					href={`https://www.linkedin.com/in/hiyash`}
					target="_blank"
					rel="noreferrer"
					className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
					<span className="inline-flex items-center justify-center w-full h-full px-3 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
						Linkedin
					</span>
				</a>
				<a
					href="https://github.com/hiyashmehta"
					target="_blank"
					rel="noreferrer"
					className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
				>
					Github
				</a>
			</motion.div>
		</motion.div>
	);
};

export default Hero;
