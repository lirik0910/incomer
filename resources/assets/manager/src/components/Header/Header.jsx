import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Palette }) => ({
	root: {
		height: 30,
		gridArea: 'header',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: Palette.default
	}
}))(({ classes, children = [] }) => (
	<div className={classes.root}>
		{children}
	</div>
));