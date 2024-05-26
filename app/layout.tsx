import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
let title = "Yash Mehta | Portfolio | yashmehta.dev ";
let description =
	"Hi, I am Yash Mehta, a full-stack developer. I build websites and web applications that are fast, responsive, and accessible. I am passionate about building products that are user-friendly and visually appealing. I use react, NextJS, Tailwind CSS, MySQL, MongoDB, Next-auth to build websites and web applications.";

export const metadata: Metadata = {
	title: {
		default: title,
		template: "%s | Yash Mehta",
	},
	description: description,
	openGraph: {
		title: title,
		description: description,
		url: "https://yashmehta.dev",
		siteName: "yashmehta.dev",
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "yash mehta",
		card: "summary_large_image",
	},
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
