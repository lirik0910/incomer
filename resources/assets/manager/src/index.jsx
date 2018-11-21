import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import { ThemeProvider } from 'react-jss';

/**
 * app style configuration
 *
 * настройка стилей всего приложения 
 */
import theme from './theme';

/**
 * provides font-awesome icons
 *
 * используються иконки font-awesome
 */
import 'font-awesome/css/font-awesome.min.css';

/**
 * spinner component for display execute process
 *
 * компонент спиннера на всю страницу, что бы показать, 
 * что выполняется какой то процесс
 */
import PageLoadingProcess from 'components/PageLoadingProcess/index';

/**
 * insert all react app into "root" dom element
 * ThemeProvider describes app style configuration in file theme.js
 * BrowserRouter, Switch and Route provide full pages rounting in SPA
 * Loadable allow to load code asynchronously when it needs
 *
 * Вставляет все реакт-приложение внутрь html-тега с id "root"
 * ThemeProvider применяет заданные стили в theme.js
 * BrowserRouter, Switch and Route реализуют возможность роутинга по SPA приложению
 * Loadable позволяет загружать код асинхронно, 
 * в зависимости от того когда это будет нужно
 */
render (<ThemeProvider theme={theme}>
	<BrowserRouter basename="/manager">
		<Switch>

			{/*
			 * IF IT NEEDS TO ADD ONE MORE PAGE
			 * IT'S NECESSARY TO COPY CODE BELOW
			 * AND SET YOUR PROPERTIES
			 *
			 * ЕСЛИ НУЖНО ДОБАВИТЬ ЕЩЕ ОДНУ СТРАНИЦУ
			 * НУЖНО СКОПИРОВАТЬ КОД НИЖЕ И 
			 * УСТАНОВИТЬ СВОИ ПАРАМЕТРЫ
			 */}
            <Route
                exact
                path="/login"
                component={Loadable({
                    loader: () => import('routes/LoginContainer/index'),
                    loading: () => <PageLoadingProcess />
                })} />

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
                path="/news"
                component={Loadable({
                    loader: () => import('routes/NewsListContainer/index'),
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
