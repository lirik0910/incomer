import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer, 
		initialState, 
		applyMiddleware(thunk, (store) => (next) => action => next(action))
	);

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers');
			store.replaceReducer(nextRootReducer);
		})
	}
	return store;
}
