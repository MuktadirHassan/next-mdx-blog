import Highlight, { defaultProps } from "prism-react-renderer";
import Blockquote from "./Blockquote";
import InlineCode from "./InlineCode";
import Pre from "./Pre";
const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

const MDXComponents = {
	blockquote: Blockquote,
	// code: InlineCode,
	// pre: ({ chilren }) => {
	// 	console.log("props => ", chilren);
	// 	return (
	// 		<Highlight {...defaultProps} code={exampleCode} language="jsx">
	// 			{({ className, style, tokens, getLineProps, getTokenProps }) => (
	// 				<pre className="p-4 my-6 rounded-lg" style={style}>
	// 					{tokens.map((line, i) => (
	// 						<div key={i} {...getLineProps({ line, key: i })}>
	// 							{line.map((token, key) => (
	// 								<span key={key} {...getTokenProps({ token, key })} />
	// 							))}
	// 						</div>
	// 					))}
	// 				</pre>
	// 			)}
	// 		</Highlight>
	// 	);
	// },
	pre: Pre,
};
export default MDXComponents;
