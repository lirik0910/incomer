import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
	(C) { props.year } All Rights Reserved. This is the "{ props.name }" built with { props.desc }. 
	Designed and implemented by <a href="http://www.webkom.co" target="_blank" className="text-primary"> www.webkom.co</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2018",
    name: "SPIN",
    desc: "Bootstrap 4, React 16 (latest) & NPM"
};

export { FooterText };
