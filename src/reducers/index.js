import { combineReducers } from 'redux';
import { applyMiddleware, compose } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import HeaderReducer from './header_reducer';
import ExperienceReducer from './experience_reducer';
import CompanyReducer from './company_reducer'; 
import FooterReducer from './footer_reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    header: HeaderReducer,
    footer: FooterReducer,
    experience: ExperienceReducer,
    company: CompanyReducer,
    form: FormReducer
},
    composeEnhancers(applyMiddleware(thunk))
);

export {rootReducer as default};