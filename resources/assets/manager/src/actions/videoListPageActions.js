
const videoListPageDeleteRowID = (payload) => (dispatch) => {
	dispatch({
		type: 'VIDEO_LIST_PAGE_DELETE_ROW_ID',
		payload
	});
}

const videoListPageCreatedAt = (payload) => (dispatch) => {
	dispatch({
		type: 'VIDEO_LIST_PAGE_CREATED_AT',
		payload
	});
}

const videoListPageRowsAreSelected = (payload) => (dispatch) => {
	dispatch({
		type: 'VIDEO_LIST_PAGE_ROWS_ARE_SELECTED',
		payload
	});
}

const videoListPageErrorMessage = (payload) => (dispatch) => {
	dispatch({
		type: 'VIDEO_LIST_PAGE_ERROR_MESSAGE',
		payload
	});
}

const videoListPageCopyRows = (payload) => (dispatch) => {
	dispatch({
		type: 'VIDEO_LIST_PAGE_COPY_ROWS',
		payload
	});
}

const videoListPageDeleteRows = (payload) => (dispatch) => {
	dispatch({
		type: 'VIDEO_LIST_PAGE_DELETE_ROWS',
		payload
	});
}

const videoListPageLoading = (payload) => (dispatch) => {
	dispatch({
		type: 'VIDEO_LIST_PAGE_LOADING',
		payload
	});
}

const videoListPageSelectedRowsIDsArray = (payload) => (dispatch) => {
	dispatch({
		type: 'VIDEO_LIST_PAGE_SELECTED_ROWS_IDS_ARRAY',
		payload
	});
}

export { 
	videoListPageDeleteRowID,
	videoListPageCreatedAt,
	videoListPageRowsAreSelected,
	videoListPageErrorMessage,
	videoListPageCopyRows,
	videoListPageDeleteRows,
	videoListPageLoading,
	videoListPageSelectedRowsIDsArray
};