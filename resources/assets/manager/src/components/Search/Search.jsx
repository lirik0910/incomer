import React from 'react';
import withStyles from 'react-jss';

import Input from 'components/Input';
import Button from 'components/Button';

import {getItemFromQueryProps} from 'url.js';

export default withStyles(() => ({
	root: {
		height: 30,
		position: 'relative',
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'hidden',
		'& input': {
			maxWidth: 'calc(100% - 44px)'
		}
	}
}))(({ 
	classes, 
	getSubmitRef = () => {}, 
	disabled = false, 
	className = '',
	inputProperties = {},
	submitProperties = {} 
}) => (
	<div className={classes.root +' '+ className}>
		<Input
			type="text"
			name="query"
			placeholder="search..."
			disabled={disabled}
			{...inputProperties}
			defaultValue={getItemFromQueryProps('query') || ''} />
		<Button {...submitProperties}
			variant="icon"
			disabled={disabled}
			getRef={getSubmitRef}
			text={<i className="fa fa-search"></i>} />
	</div>
));