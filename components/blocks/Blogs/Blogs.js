import { Blog } from "../Blog/Blog";

export function Blogs({ blogs }) {
	return (
		<div className="grid flex-auto grid-cols-1 gap-4 my-4">
			{blogs.map((b) => (
				<>
					<Blog meta={b.meta} slug={b.slug} />
				</>
			))}
		</div>
	);
}
