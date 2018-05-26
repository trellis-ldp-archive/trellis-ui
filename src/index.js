import React from 'react'
import { render } from 'react-dom'
import './assets/index.css'
import LdpApp from './components/LdpApp'
import registerServiceWorker from './registerServiceWorker'

render(<LdpApp />, document.getElementById('app-root'));
registerServiceWorker();
