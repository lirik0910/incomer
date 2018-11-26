
const changeDisplayFilesManagerAction = (payload) => (dispatch) => {
    dispatch({
        type: 'CHANGE_DISPLAY_FILES_MANAGER',
        payload
    });
}


const filesListPageErrorMessage = (payload) => (dispatch) => {
    dispatch({
        type: 'FILES_PAGE_ERROR_MESSAGE',
        payload
    });
}


export { changeDisplayFilesManagerAction, filesListPageErrorMessage };