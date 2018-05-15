import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import './assets/index.css';
import LdpApp from './components/LdpApp';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({
  form: formReducer
}));

render(
  <Provider store={store}>
    <LdpApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
