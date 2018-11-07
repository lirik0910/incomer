import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Typography, Palette }) => ({
	defaultType: Typography['default'],
	titleType: Typography['title'],

	defaultColor: {
		color: Palette['default']
	},

	primaryColor: {
		color: Palette['primary']
	}
}))(({ 
	text = 'text', 
	variant = 'default',
	color = 'default',
	className = '', 
	classes, 
	theme,
	getRef = () => {},
	...properties 
}) => (
	<span 
		{...properties}
		ref={getRef}
		className={classes[color +'Color'] +' '+ classes[variant +'Type'] +' '+ className}>

		{text}
	</span>
));