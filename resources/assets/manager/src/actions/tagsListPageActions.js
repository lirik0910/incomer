
const tagsListPageDeleteRowID = (payload) => (dispatch) => {
	dispatch({
		type: 'TAGS_LIST_PAGE_DELETE_ROW_ID',
		payload
	});
}

const tagsListPageCreatedAt = (payload) => (dispatch) => {
	dispatch({
		type: 'TAGS_LIST_PAGE_CREATED_AT',
		payload
	});
}

const tagsListPageRowsAreSelected = (payload) => (dispatch) => {
	dispatch({
		type: 'TAGS_LIST_PAGE_ROWS_ARE_SELECTED',
		payload
	});
}

const tagsListPageErrorMessage = (payload) => (dispatch) => {
	dispatch({
		type: 'TAGS_LIST_PAGE_ERROR_MESSAGE',
		payload
	});
}

const tagsListPageCopyRows = (payload) => (dispatch) => {
	dispatch({
		type: 'TAGS_LIST_PAGE_COPY_ROWS',
		payload
	});
}

const tagsListPageDeleteRows = (payload) => (dispatch) => {
	dispatch({
		type: 'TAGS_LIST_PAGE_DELETE_ROWS',
		payload
	});
}

const tagsListPageLoading = (payload) => (dispatch) => {
	dispatch({
		type: 'TAGS_LIST_PAGE_LOADING',
		payload
	});
}

const tagsListPageSelectedRowsIDsArray = (payload) => (dispatch) => {
	dispatch({
		type: 'TAGS_LIST_PAGE_SELECTED_ROWS_IDS_ARRAY',
		payload
	});
}

export { 
	tagsListPageDeleteRowID,
	tagsListPageCreatedAt,
	tagsListPageRowsAreSelected,
	tagsListPageErrorMessage,
	tagsListPageCopyRows,
	tagsListPageDeleteRows,
	tagsListPageLoading,
	tagsListPageSelectedRowsIDsArray
};