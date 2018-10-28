import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

import { UniversalComponent } from './universalComponent';
// ----------- Static Pages ---------------
import Home from './Home';
import SingleStatic from './SingleStatic';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
const getRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            
            <Route path="/nested-routes/single-static">
                <SingleStatic />
            </Route>

            <Route path="/nested-routes/nested-async/first-async">
                <UniversalComponent page="NestedAsync/FirstAsync" />
            </Route>
            <Route path="/nested-routes/nested-async/second-async">
                <UniversalComponent page="NestedAsync/SecondAsync" />
            </Route>

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
const getNavbars = () => (
    <Switch>
        { /* TODO: Place additional navbars for specific routes here */}

        { /* Default Navbar: */}
        <Route
            component={ DefaultNavbar }
        />
    </Switch>  
);

const getSidebars = () => (
    <Switch>
        { /* TODO: Place additional sidebars for specific routes here */}

        { /* Default Sidebar: */}
        <Route
            component={ DefaultSidebar }
        />
    </Switch>
);

export {
    getRoutes,
    getNavbars,
    getSidebars
};
