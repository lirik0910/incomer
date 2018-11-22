import React from 'react';
import withStyles from 'react-jss';

import Typography from 'components/Typography';
import Button from 'components/Button';

export default withStyles(({ Palette: { color7 } }) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		padding: '8px 0',
		borderBottom: '1px solid '+ color7,
		'& i.fa-folder': {
			width: 26,
			fontSize: 26,
			marginRight: 14,
			color: color7
		}
	},
	name: {
		display: 'block',
		width: 'calc(100% - 150px)',
		fontSize: 16
	}
}))(({ classes, name = '' }) => (
	<div className={classes.root}>
		<input type="checkbox" />
		<i className="fa fa-folder"></i>
		<Typography text={name} className={classes.name} />

		<Button variant="icon"
			text={<i className="fa fa-arrows"></i>} />
		<Button variant="icon"
			text={<i className="fa fa-edit"></i>} />
		<Button variant="icon"
			text={<i className="fa fa-close"></i>} />
	</div>
));