import Link from "next/link";

export function Blog({ meta, slug }) {
	return (
		<>
			<Link href={`/${slug}`}>
				<a>
					<p className="max-w-prose">{meta.title}</p>
				</a>
			</Link>
		</>
	);
}
