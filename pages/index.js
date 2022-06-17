import { getBlog } from "@/lib/fsReadHelpers";
import { Blogs } from "@/components/blocks/Blogs/Blogs";

export const getStaticProps = async () => {
	const blogs = getBlog();

	return {
		props: {
			blogs: blogs.map((b) => ({ meta: b.meta, slug: b.slug, content: b.content })),
		},
	};
};

export default function Home({ blogs = [] }) {
	if (!blogs) return;
	return (
		<div className="mx-auto text-lg leading-relaxed max-w-prose">
			<Blogs blogs={blogs} />
		</div>
	);
}
