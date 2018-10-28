import React from 'react';

import {
    Container
} from './../../components';

export const Home = () => (
    <Container>
        <h1 className="mb-4">Home</h1>
        <p>
            This is the Starter for <strong>SPIN</strong> v2 <i>(React)</i>:
        </p>
        <ul>
            <li>
                The full documentation is here: <a href="http://webkom.gitbook.io/spin" target="blank">webkom.gitbook.io/spin <i className="fa fa-external-link ml-1"></i></a>
            </li>
            <li>
                The full version of this dashboard is available here: <a href="http://v2.react.spin.webkom.co" target="blank">v2.react.spin.webkom.co <i className="fa fa-external-link ml-1"></i></a>
            </li>
        </ul>
    </Container>
);