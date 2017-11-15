import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import { createThunkMiddleware } from '../middleware/thunk';

const configureStore = createStore(rootReducer, applyMiddleware(createThunkMiddleware, logger));

export default configureStore;
