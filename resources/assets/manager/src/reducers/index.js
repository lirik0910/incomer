import { combineReducers } from 'redux';
import usersListPage from './usersListPage.js';
import foldersList from './foldersList.js';
import filesList from './filesList.js';
import newsListPage from "./newsListPage";

export default combineReducers({
	usersListPage,
	newsListPage,
	foldersList,
	filesList
});