import React from 'react';
import Default from './default';

const View = (props) => {
	const {
		RenderDefault,
	} = props;

	return (
		<RenderDefault {...props} />
	);
};

View.defaultProps = {
	RenderDefault: Default,
};

export default View;