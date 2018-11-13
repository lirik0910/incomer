import React from 'react';

import Button from 'components/Button';

/**
	* Paggination container
	* @param {Object} props
	* @return {Object}
	*/
export default ({ 
	classes, 
	onClick = () => {}, 
	page = 1, 
	total = 0, 
	limit = 20
}) => (
	<React.Fragment>
		<Button 
			disabled={page === 1}
			variant="tab"
			onClick={onClick(1, page > 1)}
			text={
				<span className="fa fa-fw fa-chevron-left"></span>
			} />

		<Button 
			disabled={page - 1 === 0}
			variant="tab"
			onClick={onClick(page - 1, page - 1 > 0)}
			text="Previos" />

		{buildButtons(page, total, limit, onClick)}

		<Button 
			variant="tab"
			disabled={total - page * limit === 0}
			onClick={onClick(page * limit / limit + 1, total - page * limit > 0)}
			text="Next" />

		<Button 
			disabled={page * limit + 1 > total}
			variant="tab"
			onClick={onClick(total / limit, page * limit + 1 <= total)}
			text={
				<span className="fa fa-fw fa-chevron-right"></span>
			} />
	</React.Fragment>
);

/**
	* Build paggination buttons
	* @param {Number} page
	* @param {Number} total
	* @param {Number} limit
	* @param {Function} onClick
	* @return {Array}
	*/
const buildButtons = (
	page = 1, 
	total = 0, 
	limit = 20, 
	onClick = () => {}
) => {
	let f = 1,
		t = 1,
		output = [],
		count = total / limit;

	if (page > 3) {
		f = page - 3;
	}
	else if(page - 3 <= 0) {
		f = 1;
	}

	if (page + 3 <= count && f + 6 <= count) {
		t = f + 6;
	}
	else if(page + 3 >= count) {
		t = page + (count - page)
		f -= 3 - (count - page);
		f = f <= 0 ? 1 : f;
	}
	else {
		t = page + (count - page);
	}
	f = Math.round(f);

	if (f === 0) {
		f = 1;
	}

	while (f < t + 1) {
		output.push(
			<Button 
				key={f} 
				variant="tab"
				className={f === page ? 
					'active' : 
					''}
				onClick={onClick(f)}
				text={f} />
			);
		f++;
	}
	return output;
}