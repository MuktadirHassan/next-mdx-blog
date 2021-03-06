import React from "react";
import MDXComponents from "@/components/blocks/Mdx/MdxComponents";
import { getBlog, getBlogBySlug } from "@/lib/fsReadHelpers";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// import rehypeHighlight from "rehype-highlight";

export default function SinglePost({ frontMatter, mdxSource }) {
	const { title, author_name, published, last_modified, tags } = frontMatter;
	if (!frontMatter || !mdxSource) return null;
	return (
		<div className="mx-auto max-w-prose">
			<h1 className="my-4 text-2xl font-bold ">{title}</h1>
			<p className="text-sm">Author: {author_name}</p>
			<p className="text-sm">Published: {published}</p>

			<article>
				<MDXRemote {...mdxSource} components={MDXComponents} lazy={true} />
			</article>
		</div>
	);
}
export const getStaticPaths = () => {
	const blogs = getBlog();

	const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }));

	return {
		fallback: false,
		paths,
	};
};

export const getStaticProps = async (ctx) => {
	// Loading on server, as it is not needed on client
	const rehypeHighlight = (await import("rehype-highlight")).default;

	const { slug } = ctx.params;
	const { content, data } = getBlogBySlug(slug);

	const mdxSource = await serialize(content, {
		// Optionally pass remark/rehype plugins
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [rehypeHighlight], // For syntax highlighting
		},
		scope: data,
	});

	return {
		props: {
			mdxSource,
			frontMatter: { ...data, slug },
		},
	};
};
