import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Button, Palette }) => ({
	defaultType: Button['default'],
	processType: Button['process'],
	tabType: Button['tab'],
	symbolType: Button['symbol'],
	linkType: Button['link'],
	minType: Button['min'],

	defaultColor: {
		color: Palette['default']
	},

	primaryColor: {
		color: Palette['primary']
	}
}))(({ 
	text = 'button', 
	variant = 'default',
	color = 'default',
	className = '', 
	classes, 
	theme,
	getRef = () => {},
	...properties 
}) => (
	<button 
		{...properties}
		ref={getRef}
		className={classes[color +'Color'] +' '+ classes[variant +'Type'] +' '+ className}>

		{text}
	</button>
));