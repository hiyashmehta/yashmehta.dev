import projectImages from "./images";
const generateImageUrl = (key: string) => {
	const imageSrc = projectImages.find((item) => item.key === key)?.images[0]
		.src;

	const path = `/${key}/${imageSrc}`;
	return path;
};
const getAllImages = (key: string) => {
	const images = projectImages.find((item) => item.key === key)?.images;

	if (images) {
		const paths =
			images &&
			images.map((image) => {
				return `/${key}/${image.src}`;
			});
		return paths;
	}
	return [];
};
console.log({ imagesForSavimo: getAllImages("savimo") });

const allProjects = [
	{
		title: "Ecommerce Admin Dashboard",
		description: ` Admin Dashboard for creating ecommerce stores. Built with NextJS, tailwind and PlanetScale.`,
		slug: "ecommerce-admin",
		published: true,
		date: "2023-07-22",
		link: `https://ecommerce-admin-dashboard-yash.vercel.app/`,
		images: getAllImages("ecommerce-admin"),
		githubURL:
			"https://github.com/hiyashmehta/e-commerce-project-admin-dashboard",
		previewImage: generateImageUrl("ecommerce-admin"),
	},
	{
		title: "Ecommerce Store",
		description: `The Store for the ecommerce admin dashboard. Built with NextJS, and tailwind.`,
		slug: "ecommerce-store",
		date: "2023-07-22",
		published: false,
		link: `https://ecommerce-store-yash.vercel.app/`,
		githubURL: "",
	},
	{
		title: "Messenger Clone",
		description: `Facebook Messenger clone built with Next.js, Tailwind CSS, and MongoDB.`,
		slug: "messenger-clone",
		date: "2023-06-09",
		published: false,
		link: `https://yash-messenger-clone.vercel.app`,
	},
	{
		title: "Google Sheets clone",
		link: "https://sheets-clone-vert.vercel.app/",
		slug: "google-sheets-clone",
		date: "2023-09-22",
		published: false,
		description: `Google Sheets clone built with html, css and javascript.`,
	},
	{
		title: "Web Cam App",
		published: false,
		date: "2023-09-26",
		slug: "web-cam-app",
		description: `Web Cam App built with HTML, CSS, javascript using Media recorder api, IndexedDB for storage.`,
		link: "https://webcaam.vercel.app/",
	},
	{
		title: "Ecommerce Store with Admin Dashboard",
		description: `Built an ecommerce dashboard and store using Next.js, Material UI, and Firebase. Stripe for accepting payments.`,
		slug: "ecommerce-store-with-admin-dashboard",
		date: "2023-06-22",
		published: false,
		link: `https://ecommerce-example.mishtus.dev`,
	},
	{
		title: "Dev Overflow",
		link: "https://devoverflow-blush.vercel.app/",
		slug: "dev-overflow",
		date: "2023-11-26",
		published: true,
		description:
			"Dev Overflow is a platform for developers to share their knowledge and help others. Built with Next.js, Tailwind CSS, and MongoDB.",
		images: getAllImages("devflow"),
		githubURL: "https://github.com/hiyashmehta/devoverflow",
		previewImage: generateImageUrl("devflow"),
	},
	{
		title: "Instagram Clone",
		link: "https://yash-insta-clone.vercel.app/",
		slug: "instagram-clone",
		date: "2023-12-03",
		published: true,
		description:
			"Instagram clone built with ReactJS, Chakra UI, and Firebase.",
		images: getAllImages("insta"),
		githubURL: "https://github.com/hiyashmehta/insta-clone",
		previewImage: generateImageUrl("insta"),
	},
	{
		title: "Savimo.app",
		link: "https://savimo.app/",
		slug: "savimo",
		date: "2024-05-12",
		published: true,
		description: "Savimo.app - an expense tracker",
		images: getAllImages("savimo"),
		githubURL: "https://github.com/hiyashmehta/savimo.app",
		previewImage: generateImageUrl("savimo"),
	},
	{
		title: "Auth-v5",
		// link: "https://yash-insta-clone.vercel.app/",
		slug: "auth",
		date: "2024-01-12",
		published: true,
		description:
			"Next Auth V5 - project built with nextjs, tailwindcss and next-auth to create custom authentication system for a website. With this, we can easily give role based access to users in the application.",
		images: getAllImages("auth"),
		previewImage: generateImageUrl("auth"),
		githubURL: "https://github.com/hiyashmehta/Auth-v5",
		tech: ["nextjs, tailwind", "next-auth", "postgresql"],
	},
	{
		title: "learning Management System",
		// link: "https://yash-insta-clone.vercel.app/",
		slug: "lms",
		date: "2023-10-03",
		published: true,
		description:
			"LMS app - project built with nextjs, tailwindcss and next-auth to create custom authentication system for a website. With this, we can easily give role based access to users in the application.",
		images: getAllImages("lms"),
		tech: ["nextjs, tailwind", "clerk", "mysql", "mux"],
		previewImage: generateImageUrl("lms"),
	},
];
export default allProjects;
