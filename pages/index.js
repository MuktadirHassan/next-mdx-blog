import { getBlog } from "@/lib/fsReadHelpers";
import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export const getStaticProps = async () => {
	const blogs = getBlog();
	const mdxPrism = require("mdx-prism");
	const mdxSource = await serialize(blogs[0].content, {
		mdxOptions: { rehypePlugins: [mdxPrism] },
	});
	return {
		props: {
			blogs: blogs.map((b) => ({ ...b.meta, slug: b.slug, content: b.content })),
			mdxSource,
		},
	};
};

export default function Home({ blogs = [], mdxSource }) {
	return (
		<div className="max-w-prose leading-relaxed text-lg mx-auto">
			<Blogs blogs={blogs} mdxSource={mdxSource} />
		</div>
	);
}

function Blogs({ blogs, mdxSource }) {
	return (
		<>
			{blogs.map((b) => (
				<>
					<Blog content={b.content} mdxSource={mdxSource} />
				</>
			))}
		</>
	);
}

function Blog({ content, mdxSource }) {
	return (
		<>
			<p className="max-w-prose">
				<MDXRemote {...mdxSource} components={{}} />
			</p>
			<hr className="my-10" />
		</>
	);
}
