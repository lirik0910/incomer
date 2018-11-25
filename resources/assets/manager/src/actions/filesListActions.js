
const changeDisplayFilesManagerAction = (payload) => (dispatch) => {
    console.log('!!!!!!')
    dispatch({
        type: 'CHANGE_DISPLAY_FILES_MANAGER',
        payload
    });
}

export { changeDisplayFilesManagerAction };