import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Demos from './Demos';
import Contact from './Contact';
import ZoomerDemo from './components/demos/zoomer_demo';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/demos" component={Demos} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/demo/react-zoomer" component={ZoomerDemo} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();