import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

import {ThemeProvider} from 'react-jss';

import theme from 'theme.js';
import 'font-awesome/css/font-awesome.min.css';

import PageLoadingProcess from 'components/PageLoadingProcess';

import {Provider} from 'react-redux';
import store from 'store.js';

render(<ThemeProvider theme={theme}>
    <BrowserRouter basename="/manager">
        <Provider store={store()}>
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/news"/>
                )}/>
                <Route
                    exact
                    path="/login"
                    component={Loadable({
                        loader: () => import('routes/LoginContainer/index'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/dashboard"
                    component={Loadable({
                        loader: () => import('routes/DashboardWidgetsContainer'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/users"
                    component={Loadable({
                        loader: () => import('routes/UsersListContainer'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/tags"
                    component={Loadable({
                        loader: () => import('routes/TagsListContainer'),
                        loading: () => <PageLoadingProcess/>
                    })}/>


                <Route
                    exact
                    path="/news"
                    component={Loadable({
                        loader: () => import('routes/NewsListContainer/index'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/news/create"
                    component={Loadable({
                        loader: () => import('routes/NewsEditContainer/index'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/news/:id"
                    component={Loadable({
                        loader: () => import('routes/NewsEditContainer/index'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/pages"
                    component={Loadable({
                        loader: () => import('routes/PagesListContainer'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/page"
                    component={Loadable({
                        loader: () => import('routes/EditPageContainer'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/page/:id"
                    component={Loadable({
                        loader: () => import('routes/EditPageContainer'),
                        loading: () => <PageLoadingProcess/>
                    })}/>

                <Route
                    exact
                    path="/media"
                    component={Loadable({
                        loader: () => import('routes/ManageMediaItemsContainer'),
                        loading: () => <PageLoadingProcess/>
                    })}/>
            </Switch>
        </Provider>
    </BrowserRouter>
</ThemeProvider>, document.getElementById('root'));