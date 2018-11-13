import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Panel }) => ({
	...Panel
}))(({ 
	children = [],
	variant = 'default',
	classes, 
	className = '' 
}) => (
	<div className={classes[variant] +' '+ className}>
		{children}
	</div>
));