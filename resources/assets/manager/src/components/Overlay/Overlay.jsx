import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Overlay = {} }) => ({
	...Overlay
}))(({ 
	variant = 'default',
	className = '',
	classes, 
	children = [],
	onClose = () => {},
	getRef = () => {},
}) => (
	<div className={classes[variant]} onClick={onClose}>{children}</div>
));