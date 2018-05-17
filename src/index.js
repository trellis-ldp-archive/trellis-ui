import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import './assets/index.css';
import LdpApp from './components/LdpApp';
import registerServiceWorker from './registerServiceWorker';

// The submit action type
const SUBMITTED = "@@redux-form/SET_SUBMIT_SUCCEEDED";

const store = createStore(combineReducers({
  form: formReducer.plugin({
    resource: (state, action) => {
      switch(action.type) {
        // Reset the form
        case SUBMITTED:
          return undefined;
        default:
          return state
      }
    }
  })
}));

render(
  <Provider store={store}>
    <LdpApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
