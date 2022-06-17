import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const CONTENT_DIRECTORY = path.join(process.cwd(), "data");
const getPathDir = (path) => {
	console.log(fs.readdirSync(`${CONTENT_DIRECTORY}/${path}`));
	return fs.readdirSync(`${CONTENT_DIRECTORY}/${path}`).filter((f) => /\.mdx?$/.test(f));
};

export const getBlog = () => {
	const paths = getPathDir("posts");

	return paths.map((p) => {
		const PATH_DIR = path.join(`${CONTENT_DIRECTORY}/posts`, p);
		const file = fs.readFileSync(PATH_DIR, "utf8");

		const { data, content } = matter(file);

		return {
			meta: data,
			slug: p.replace(".mdx", ""),
			content,
		};
	});
};

export const getBlogBySlug = (slug) => {
	const PATH_DIR = path.join(`${CONTENT_DIRECTORY}/posts`, `${slug}.mdx`);
	const file = fs.readFileSync(PATH_DIR, "utf8");

	const { data, content } = matter(file);

	return {
		data: data,
		content,
	};
};
