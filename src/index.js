import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import './assets/index.css';
import TrellisApp from './components/TrellisApp';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(combineReducers({
  form: formReducer
}));

render(
  <Provider store={store}>
    <TrellisApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
