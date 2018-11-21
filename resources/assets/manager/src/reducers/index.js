import { combineReducers } from 'redux';
import usersListPage from './usersListPage.js';
import foldersList from './foldersList.js';
import filesList from './filesList.js';

export default combineReducers({
	usersListPage,
	foldersList,
	filesList
});