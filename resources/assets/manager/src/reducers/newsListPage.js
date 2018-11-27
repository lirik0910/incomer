import moment from 'moment';
import {getItemFromQueryProps} from 'url.js';

const newsListPage = (state = {
	prepareDeleteRowID: 0, 
	createdAtFilterValue: getItemFromQueryProps('created_at') || moment(),
	selectedRowsFlag: false,
	catchedErrorMessage: '',
	displayCopySeveralRows: false,
	displayDeleteSeveralRows: false,
	dataLoadingFlag: false,
	selectedRowsIdsArray: []
}, action) => {
	switch(action.type) {
		case 'NEWS_LIST_PAGE_DELETE_ROW_ID':
			return { ...state, prepareDeleteRowID: action.payload };

		case 'NEWS_LIST_PAGE_CREATED_AT':
			return { ...state, createdAtFilterValue: action.payload };

		case 'NEWS_LIST_PAGE_ROWS_ARE_SELECTED':
			return { ...state, selectedRowsFlag: action.payload };

		case 'NEWS_LIST_PAGE_ERROR_MESSAGE':
            return { ...state, catchedErrorMessage: action.payload };

		case 'NEWS_LIST_PAGE_COPY_ROWS':
			return { ...state, displayCopySeveralRows: action.payload };

		case 'NEWS_LIST_PAGE_DELETE_ROWS':
			return { ...state, displayDeleteSeveralRows: action.payload };

		case 'NEWS_LIST_PAGE_LOADING':
			return { ...state, dataLoadingFlag: action.payload };

		case 'NEWS_LIST_PAGE_SELECTED_ROWS_IDS_ARRAY':
			return { ...state, selectedRowsIdsArray: [ ...action.payload ] };

		default:
			return { ...state }
	}
};

export default newsListPage;