import React from 'react';

import {
    Container
} from './../../../components';
import classes from './SecondAsync.scss';

export const SecondAsync = () => (
    <Container>
        <h1>Second Async Route</h1>

        <p className={ classes['paragraph'] }>
            This is the second of the two asynchronous routes. The content for this page
            will be loaded after navigation, not on application start. It uses Webpack&apos;s
            dynamic import via the included <code>&lt;UniversalComponent&gt;</code> which wrapps this route.
            Routes connected this way can significantly reduce the initial load time of your application.
        </p>
    </Container>
);
