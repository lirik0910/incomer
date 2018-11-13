import React from 'react';
import withStyles from 'react-jss';

import Typography from 'components/Typography';

export default withStyles(({ Dialog, Palette: { color4 } }) => ({
	...Dialog,
	text: {
		color: color4
	}
}))(({ 
	className = '',
	classes, 
	theme,
	text = '',
	getRef = () => {},
	...properties 
}) => (
	<React.Fragment>
		<div ref={getRef} {...properties}
			className={classes['alert'] +' '+ className}>
			
			<Typography
				text={text || 'alert text'}
				className={classes.text} />
		</div>
	</React.Fragment>
));