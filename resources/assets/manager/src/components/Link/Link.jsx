import React from 'react';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';

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
	},

	auxType: { 
		...Button['default'],

		'&:hover': {
			color: Palette['aux']
		}
	}
}))(({ 
	text, 
	variant = 'default',
	color = 'default',
	children = [],
	className = '', 
	classes, 
	theme,
	getRef = () => {},
	...properties 
}) => (
	<Link {...properties}
		ref={getRef}
		className={classes[color +'Color'] +' '+ classes[variant +'Type'] +' '+ className}>

		{text || children}
	</Link>
));