import clsx from "clsx";
import Link from "next/link";

export function Blog({ meta, slug }) {
	const { title, summary } = meta;
	return (
		<>
			<Link href={`/${slug}`}>
				<a
					className={clsx(
						"flex flex-col p-4 w-full h-full",
						"border rounded-lg transition",
						"border-main-2 dark:border-main-3",
						"hover:border-main-4 dark:hover:border-main-2"
					)}
				>
					<h3>{title}</h3>
					{<p className="mt-[0.675em] text-sm leading-5">{summary}</p>}
				</a>
			</Link>
		</>
	);
}
