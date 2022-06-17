const Blockquote = ({ children }) => {
	return (
		<blockquote className="from-primary-3 to-secondary-3">
			<style jsx>
				{`
					blockquote {
						border-image: linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to))
							1;
					}
				`}
			</style>
			{children}
		</blockquote>
	);
};

export default Blockquote;
