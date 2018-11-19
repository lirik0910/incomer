import React from 'react';
import withStyles from 'react-jss';

import Panel from 'components/Panel';

export default withStyles({
	root: {
		margin: 12,
		gridArea: 'news-filters'
	}
})(({ classes = {}, children = [] }) => (
	<div className={classes.root}>
		<Panel>{children}</Panel>
	</div>
));