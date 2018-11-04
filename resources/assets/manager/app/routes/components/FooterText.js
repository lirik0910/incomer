import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
	(C) { props.year } All Rights Reserved.
        Created by { props.desc }
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2018",
    name: "Incomerfinance",
    desc: "ohmycode!"
};

export { FooterText };
