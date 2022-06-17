import { Blog } from "../Blog/Blog";

export function Blogs({ blogs }) {
	return (
		<>
			{blogs.map((b) => (
				<>
					<Blog meta={b.meta} slug={b.slug} />
				</>
			))}
		</>
	);
}
