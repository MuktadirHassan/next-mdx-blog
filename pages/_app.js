import { ThemeProvider } from "next-themes";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import "@/css/tailwind.css";
import siteMetadata from "@/lib/siteMetadata";

const v = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: 0,
	},
};

function MyApp({ Component, pageProps, router }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme={siteMetadata.theme}
			storageKey="theme"
			enableSystem
		>
			<LazyMotion features={domAnimation}>
				<AnimatePresence initial={false} exitBeforeEnter>
					<m.div
						key={router.route}
						variants={v}
						initial="hidden"
						animate="visible"
						exit="exit"
						transition={{
							duration: 0.25,
							type: "tween",
						}}
					>
						<Component {...pageProps} />
					</m.div>
				</AnimatePresence>
			</LazyMotion>
		</ThemeProvider>
	);
}

export default MyApp;
