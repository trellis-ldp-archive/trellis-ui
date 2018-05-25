import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer, actionTypes } from 'redux-form'
import './assets/index.css'
import LdpApp from './components/LdpApp'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(combineReducers({
  form: formReducer.plugin({
    // Reset the form upon submission
    resource: (state, action) => action.type === actionTypes.SET_SUBMIT_SUCCEEDED ? undefined : state
  })
}));

render(
  <Provider store={store}>
    <LdpApp />
  </Provider>, document.getElementById('app-root'));
registerServiceWorker();
