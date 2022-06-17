import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { CheckCircleIcon, ClipboardCopyIcon } from "@heroicons/react/solid";
import Button from "@/components/atoms/Button";

const Pre = ({ children, className }) => {
	const [isCopied, setIsCopied] = useState(false);
	const preRef = useRef(null);

	const copyToClipboard = async () => {
		if (preRef.current && !isCopied) {
			await navigator.clipboard.writeText(preRef.current.textContent);
			setIsCopied(true);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => setIsCopied(false), 1500);

		return () => clearTimeout(timer);
	}, [isCopied]);

	return (
		<div className="relative">
			<div
				className={clsx(
					"absolute left-0 right-12",
					"h-11 rounded-tl rounded-br",
					"font-semibold text-sm",
					"bg-slate-700 dark:bg-slate-800 text-main-1.5"
				)}
			>
				<div
					className={clsx(
						"inline-flex items-center justify-start",
						"px-4 md:px-8 h-full rounded-tl",
						"bg-primary-4"
					)}
				>
					{className?.replace("language-", "").toUpperCase()}
				</div>
			</div>

			<div
				className={clsx(
					"absolute top-0 right-0",
					"flex items-center justify-center",
					"w-11 h-11 rounded-tr rounded-bl",
					"bg-slate-700 dark:bg-slate-800"
				)}
			>
				<Button
					onClick={copyToClipboard}
					screenReaderText="Copy To Clipboard"
					className={clsx(
						"group relative inline-flex items-center justify-center",
						"w-8 h-8 rounded-lg transition-all duration-200",
						"ring-main-2",
						"hover:ring"
					)}
				>
					{isCopied ? (
						<CheckCircleIcon className="w-4 h-4 text-emerald-500" />
					) : (
						<ClipboardCopyIcon className="w-4 h-4 text-main-1" />
					)}
				</Button>
			</div>
			<pre
				ref={preRef}
				style={{ paddingTop: "3.5rem" }}
				className={clsx(className, "overflow-x-auto overflow-y-hidden")}
			>
				{children}
			</pre>
		</div>
	);
};

export default Pre;
