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

export { 
	dataLoadingFlagSelector,
	foldersListSelector,
	filesListSelector
};