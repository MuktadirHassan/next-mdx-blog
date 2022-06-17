import Blockquote from "./Blockquote";
import Pre from "./Pre";

const MDXComponents = {
	h3: (props) => <h3 className="my-3 text-4xl font-bold">{props.children}</h3>,
	p: (props) => <p className="my-4 leading-relaxed max-w-prose">{props.children}</p>,
	blockquote: Blockquote,
	pre: (props) => <Pre className={props.children.props.className}>{props.children}</Pre>,
};
export default MDXComponents;
