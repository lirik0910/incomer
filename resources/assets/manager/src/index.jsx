import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { ThemeProvider } from 'react-jss';
import theme from './theme';
import 'font-awesome/css/font-awesome.min.css';

import PageLoadingProcess from 'components/PageLoadingProcess/index';

render (<ThemeProvider theme={theme}>
	<BrowserRouter>
		<Switch>
			<Route
				exact
				path="/dashboard"
				component={Loadable({
					loader: () => import('routes/DashboardWidgetsContainer/index'),
					loading: () => <PageLoadingProcess />
				})} />

			<Route
				exact
				path="/users"
				component={Loadable({
					loader: () => import('routes/UsersListContainer/index'),
					loading: () => <PageLoadingProcess />
				})} />

			<Route
				exact
				path="/pages"
				component={Loadable({
					loader: () => import('routes/PagesListContainer/index'),
					loading: () => <PageLoadingProcess />
				})} />

			<Route
				exact
				path="/page"
				component={Loadable({
					loader: () => import('routes/EditPageContainer/index'),
					loading: () => <PageLoadingProcess />
				})} />

			<Route
				exact
				path="/page/:id"
				component={Loadable({
					loader: () => import('routes/EditPageContainer/index'),
					loading: () => <PageLoadingProcess />
				})} />

			<Route
				exact
				path="/media"
				component={Loadable({
					loader: () => import('routes/ManageMediaItemsContainer/index'),
					loading: () => <PageLoadingProcess />
				})} />
		</Switch>
	</BrowserRouter>
</ThemeProvider>, document.getElementById('root'));
