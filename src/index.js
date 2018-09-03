import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();