
const filesList = (state = {
    displayFilesManagerFlag: false
}, action) => {
	switch(action.type) {
		case 'CHANGE_DISPLAY_FILES_MANAGER':
			return { ...state, displayFilesManagerFlag: action.payload };

		case 'CHANGE_DISPLAY_FILES_MANAGER_SELECT':
			return { ...state, displayFilesManagerSelectFlag: action.payload };

        case 'FILES_PAGE_ERROR_MESSAGE':
            return { ...state, catchedErrorMessage: action.payload };


        default:
			return { ...state }
	}
}

export default filesList;