import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const HeaderAuth = (props) => (
    <div className="mb-4">
        <div className="mb-4 text-center">
            {/*<Link to="/">*/}
                <i className={ `fa fa-${ props.icon } fa-3x ${ props.iconClassName }` }></i>
            {/*</Link>*/}
        </div>
        <h5 className="text-center mb-4">
            { props.title }
        </h5>
        {/*<p className="text-center">
            { props.text }
        </p>*/}
    </div>
)
HeaderAuth.propTypes = {
    icon: PropTypes.node,
    iconClassName: PropTypes.node,
    title: PropTypes.node,
    text: PropTypes.node,
};
HeaderAuth.defaultProps = {
    icon: "bandcamp",
    title: "Waiting for Data...",
    text: "",
    iconClassName: "text-primary"
};

export { HeaderAuth };
