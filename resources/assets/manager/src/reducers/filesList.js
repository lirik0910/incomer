
const filesList = (state = {
    displayFilesManagerFlag: false
}, action) => {
	switch(action.type) {
		case 'CHANGE_DISPLAY_FILES_MANAGER':
			console.log(action.payload)
			return { ...state, displayFilesManagerFlag: action.payload };

		default:
			return { ...state }
	}
}

export default filesList;