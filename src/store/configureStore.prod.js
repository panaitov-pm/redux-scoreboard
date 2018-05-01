import {createStore, applyMiddleware} from 'redux';
import randomId from '../middleWares/randomId';
import reducer from '../reducer';

const configureStore = preloadedState => {
	const store = createStore(
		reducer,
		preloadedState,
		applyMiddleware(randomId),
	);
	return store;
};

export default configureStore;