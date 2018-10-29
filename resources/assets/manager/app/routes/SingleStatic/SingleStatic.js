import React from 'react';

import {
    Container
} from './../../components';

export const SingleStatic = () => (
    <Container>
        <h1 className="mb-4">Single Static Route</h1>

        <p>
            This route will be loaded synchronously - with the initial application data. The potentially most
            visited pages should be loaded this way, so the user won&apos;t have to wait for additional loading.
        </p>
    </Container>
);
