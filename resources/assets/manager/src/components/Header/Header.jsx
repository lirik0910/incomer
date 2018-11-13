import React from 'react';
import withStyles from 'react-jss';

import Panel from 'components/Panel';

export default withStyles(() => ({
	root: {
		padding: 0,
		gridArea: 'header',
		display: 'flex',
		alignItems: 'center'
	}
}))(({ classes, children = [] }) => (
	<Panel className={classes.root}>
		{children}
	</Panel>
));