import React from 'react';
import withStyles from 'react-jss';

import Overlay from 'components/Overlay';

export default withStyles(({ Aside }) => ({
	...Aside,
	left: { left: 0 },
	right: { right: 0 }
}))(({ 
	side = 'left',
	variant = 'default',
	className = '',
	classes, 
	theme,
	children = [],
	onClose = () => {},
	getRef = () => {},
	...properties 
}) => (
	<React.Fragment>
		<Overlay variant={variant} onClose={onClose} />
		<div ref={getRef} {...properties}
			className={classes[variant] +' '+ classes[side] +' '+ className}>
			{children}
		</div>
	</React.Fragment>
));