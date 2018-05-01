import {createStore, applyMiddleware, compose} from 'redux';
import DevTools from '../containers/DevTools';
import randomId from '../middleWares/randomId';
import logger from 'redux-logger';
import reducer from '../reducer';

const configureStore = preloadedState => {
	const store = createStore(
		reducer,
		preloadedState,
		compose(
			applyMiddleware(randomId, logger),
			DevTools.instrument()
		)
	);
	return store;
};

export default configureStore;