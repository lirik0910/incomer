import React from 'react';
import withStyles from 'react-jss';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default withStyles(({ Input }) => ({
	...Input,
	root: {
		width: 'calc(100% - 12px)',
		marginBottom: 12
	}
}))(({ 
	variant = 'default',
	className = '',
	classes, 
	theme,
	...properties 
}) => {
	return variant === 'date' ? 
		<DatePicker {...properties}
			className={classes[variant] +' '+ className +' '+ classes.root}
			customInput={
				<input {...properties.form ? { form: properties.form } : {}} 
					type="text" />
			} /> : 
		<input 
			{...properties}
			className={classes[variant] +' '+ className +' '+ classes.root} />
});