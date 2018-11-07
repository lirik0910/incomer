import React from 'react';
import withStyles from 'react-jss';

import Spinner from 'static/spinner.gif';

export default withStyles({
	root: {
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		zIndex: 4048,
		position: 'fixed',
		backgroundImage: 'url('+ Spinner +')',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: '148px',
		backgroundColor: 'rgba(0, 0, 0, .1)'
	}
})(({ classes }) => (
	<div className={classes.root}></div>
));