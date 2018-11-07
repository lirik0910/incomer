import React from 'react';

export default ({ columns }) => (
	<tr>
	{columns.map((item, i) => (
		<td key={i}>{item}</td>
	))}
	</tr>
);