import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Yash Mehta | Portfolio | yashmehta.dev ",
	description:
		"Hi, I am Yash Mehta, a full-stack developer. I build websites and web applications that are fast, responsive, and accessible. I am passionate about building products that are user-friendly and visually appealing. I use react, NextJS, Tailwind CSS, MySQL, MongoDB, Next-auth to build websites and web applications.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
