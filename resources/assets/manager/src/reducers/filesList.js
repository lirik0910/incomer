
const filesList = (state = {
}, action) => {
	switch(action.type) {
		// case 'FILES_LIST_ROWS_ARE_SELECTED_SELECTED':
		// 	return { ...state, selectedRowsFlag: action.payload };

		default:
			return { ...state }
	}
}

export default filesList;