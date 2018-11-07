import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Palette }) => ({
	overlay: {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		position: 'fixed',
		backgroundColor: 'rgba(0, 0, 0, .1)',
		zIndex: 2048
	},

	root: {
		top: 0,
		width: '200px',
		height: '100%',
		position: 'fixed',
		backgroundColor: Palette.primary,
		zIndex: 2049
	},

	leftSide: {
		left: 0
	}
}))(({ 
	side = 'left',
	className = '', 
	classes, 
	theme,
	children = [],
	onClose = () => {},
	getRef = () => {},
	...properties 
}) => (
	<React.Fragment>
		<div 
			className={classes.overlay}
			onClick={onClose}></div>
		<div 
			{...properties}
			ref={getRef}
			className={classes.root +' '+ classes[side +'Side'] +' '+ className}>

			{children}
		</div>
	</React.Fragment>
));