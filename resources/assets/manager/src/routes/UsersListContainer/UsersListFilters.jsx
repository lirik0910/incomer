import React from 'react';
import withStyles from 'react-jss';

import Panel from 'components/Panel';

export default withStyles({
	root: {
		margin: 12,
		gridArea: 'users-filters'
	}
})(({ classes = {}, children = [] }) => (
	<div className={classes.root}>
		<Panel>{children}</Panel>
	</div>
));