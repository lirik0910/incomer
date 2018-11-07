import React from 'react';

export default ({ columns = [] }) => (
	<thead>
		<tr>
		{columns.map((item, i) => (
			<td key={i}>{item}</td>
		))}
		</tr>
	</thead>
);