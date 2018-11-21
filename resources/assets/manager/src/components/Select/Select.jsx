import React from 'react';
import withStyles from 'react-jss';

export default withStyles(({ Select }) => ({
	...Select
}))(({ 
	variant = 'default',
	className = '', 
	classes, 
	theme,
	options = [],
	getRef = () => {},
	...properties 
}) => (
	<select 
		{...properties}
		ref={getRef}
		className={classes[variant] +' '+ className}>
		
		{options.map((item, i) => (
			<option 
				key={i}
				{...item[1] ? { value: item[1] } : {}}>

				{item[0]}
			</option>
		))}
	</select>
));