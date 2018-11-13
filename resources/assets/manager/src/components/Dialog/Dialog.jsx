import React from 'react';
import withStyles from 'react-jss';

import Overlay from 'components/Overlay';
import Typography from 'components/Typography';
import Button from 'components/Button';

export default withStyles(({ Dialog, Palette: { color4 } }) => ({
	...Dialog,
	title: {
		paddingLeft: 12,
	},
	close: {
		'float': 'right'
	},
	content: {
		padding: 12,
		marginBottom: 34,
		'& span': {
			color: color4 +' !important'
		}
	},
	control: {
		bottom: 0,
		position: 'absolute'
	}
}))(({ 
	variant = 'default',
	className = '',
	classes, 
	theme,
	title = '',
	children = [],
	control = [],
	onClose = () => {},
	getRef = () => {},
	...properties 
}) => (
	<React.Fragment>
		<Overlay variant={variant} onClose={onClose} />
		<div ref={getRef} {...properties}
			className={classes[variant] +' '+ className}>
			
			<Typography
				variant="anti"
				text={title || 'dialog title'}
				className={classes.title} />
			<Button
				variant="tab"
				className={classes.close}
				text={<i className="fa fa-close"></i>}
				onClick={onClose} />
			
			<div className={classes.content}>
			{children}
			</div>

			<div className={classes.control}>
			{control}
			</div>
		</div>
	</React.Fragment>
));