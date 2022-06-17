import clsx from "clsx";

const InlineCode = ({ children }) => {
	return (
		<code
			className={clsx(
				"px-2 py-1 rounded border",
				"dark:text-main-1",
				"border-main-2 dark:border-main-3"
			)}
		>
			{children}
		</code>
	);
};

export default InlineCode;
