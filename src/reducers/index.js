import { combineReducers } from 'redux';
import { applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import HeaderReducer from './header_reducer';
import ExperienceReducer from './experience_reducer';
import FooterReducer from './footer_reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    header: HeaderReducer,
    footer: FooterReducer,
    experience: ExperienceReducer,
    form: formReducer
},
    composeEnhancers(applyMiddleware(thunk))
);

export {rootReducer as default};