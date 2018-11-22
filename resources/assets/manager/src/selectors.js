import { createSelector } from 'reselect';

const prepareDeleteRowIDSelector = createSelector(
	(state) => state.usersListPage.prepareDeleteRowID,
	(usersListPage) => usersListPage
);

const createdAtFilterValueSelector = createSelector(
	(state) => state.usersListPage.createdAtFilterValue,
	(usersListPage) => usersListPage
);

const selectedRowsFlagSelector = createSelector(
	(state) => state.usersListPage.selectedRowsFlag,
	(usersListPage) => usersListPage
);

const catchedErrorMessageSelector = createSelector(
	(state) => state.usersListPage.catchedErrorMessage,
	(usersListPage) => usersListPage
);

const displayCopySeveralRowsSelector = createSelector(
	(state) => state.usersListPage.displayCopySeveralRows,
	(usersListPage) => usersListPage
);

const displayDeleteSeveralRowsSelector = createSelector(
	(state) => state.usersListPage.displayDeleteSeveralRows,
	(usersListPage) => usersListPage
);

const dataLoadingFlagSelector = createSelector(
	(state) => state.usersListPage.dataLoadingFlag,
	(usersListPage) => usersListPage
);

const selectedRowsIdsArraySelector = createSelector(
	(state) => state.usersListPage.selectedRowsIdsArray,
	(usersListPage) => usersListPage
);

export { 
	prepareDeleteRowIDSelector,
	createdAtFilterValueSelector,
	selectedRowsFlagSelector,
	catchedErrorMessageSelector,
	displayCopySeveralRowsSelector,
	displayDeleteSeveralRowsSelector,
	dataLoadingFlagSelector,
	selectedRowsIdsArraySelector
};