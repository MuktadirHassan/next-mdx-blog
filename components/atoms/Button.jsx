import { createElement } from "react";
const Button = ({ children, screenReaderText, ...props }) =>
	createElement(
		"button",
		{ ...props, [screenReaderText ? "aria-label" : ""]: screenReaderText },
		screenReaderText ? <span className="sr-only">{screenReaderText}</span> : null,
		children
	);

export default Button;
