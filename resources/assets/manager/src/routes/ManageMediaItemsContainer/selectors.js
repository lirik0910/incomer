import { createSelector } from 'reselect';

const dataLoadingFlagSelector = createSelector(
	(state) => false,
	(managerMediaItemsPage) => managerMediaItemsPage
);

const foldersListSelector = createSelector(
	(state) => [],
	(managerMediaItemsPage) => managerMediaItemsPage
);

const filesListSelector = createSelector(
	(state) => [],
	(managerMediaItemsPage) => managerMediaItemsPage
);

const displayFilesManagerFlagSelector = createSelector(
	(state) => state.filesList.displayFilesManagerFlag,
	(filesList) => filesList
);

export { 
	dataLoadingFlagSelector,
	foldersListSelector,
	filesListSelector,
    displayFilesManagerFlagSelector
};