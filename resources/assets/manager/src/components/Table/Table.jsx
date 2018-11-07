import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Table }) => ({
	defaultType: Table['default']
}))(({ 
	classes, 
	variant = 'default', 
	className = '',
	children = []
}) => (
	<table className={classes[variant +'Type'] +' '+ className}>
		{children}
	</table>
));