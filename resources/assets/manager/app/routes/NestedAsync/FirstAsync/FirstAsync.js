import React from 'react';

import {
    Container
} from './../../../components';

export const FirstAsync = () => (
    <Container>
        <h1 className="mb-4">First Async Route</h1>

        <p>
            This is the first of the two asynchronous routes. The content for this page
            will be loaded after navigation, not on application start. It uses Webpack&apos;s
            dynamic import via the included <code>&lt;UniversalComponent&gt;</code> which wrapps this route.
            Routes connected this way can significantly reduce the initial load time of your application.
        </p>
    </Container>
);
