
const newsListPageDeleteRowID = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_DELETE_ROW_ID',
		payload
	});
}

const newsListPageCreatedAt = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_CREATED_AT',
		payload
	});
}

const newsListPageRowsAreSelected = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_ROWS_ARE_SELECTED',
		payload
	});
}

const newsListPageErrorMessage = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_ERROR_MESSAGE',
		payload
	});
}

const newsListPageCopyRows = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_COPY_ROWS',
		payload
	});
}

const newsListPageDeleteRows = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_DELETE_ROWS',
		payload
	});
}

const newsListPageLoading = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_LOADING',
		payload
	});
}

const newsListPageSelectedRowsIDsArray = (payload) => (dispatch) => {
	dispatch({
		type: 'USER_LIST_PAGE_SELECTED_ROWS_IDS_ARRAY',
		payload
	});
}

export { 
	newsListPageDeleteRowID,
	newsListPageCreatedAt,
	newsListPageRowsAreSelected,
	newsListPageErrorMessage,
	newsListPageCopyRows,
	newsListPageDeleteRows,
	newsListPageLoading,
	newsListPageSelectedRowsIDsArray
};