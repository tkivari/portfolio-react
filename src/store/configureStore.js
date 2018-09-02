import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk, promise))
    );
}