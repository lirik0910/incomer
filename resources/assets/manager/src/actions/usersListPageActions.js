
const userListPageDeleteRowID = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_DELETE_ROW_ID',
		payload
	});
}

const userListPageCreatedAt = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_CREATED_AT',
		payload
	});
}

const userListPageRowsAreSelected = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_ROWS_ARE_SELECTED',
		payload
	});
}

const userListPageErrorMessage = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_ERROR_MESSAGE',
		payload
	});
}

const userListPageCopyRows = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_COPY_ROWS',
		payload
	});
}

const userListPageDeleteRows = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_DELETE_ROWS',
		payload
	});
}

const userListPageLoading = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_LOADING',
		payload
	});
}

const userListPageSelectedRowsIDsArray = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_SELECTED_ROWS_IDS_ARRAY',
		payload
	});
}

export { 
	userListPageDeleteRowID,
	userListPageCreatedAt,
	userListPageRowsAreSelected,
	userListPageErrorMessage,
	userListPageCopyRows,
	userListPageDeleteRows,
	userListPageLoading,
	userListPageSelectedRowsIDsArray
};