import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Panel }) => ({
	root: Panel
}))(({ children, classes, className = '' }) => (
	<div className={classes.root +' '+ className}>
		{children || []}
	</div>
));