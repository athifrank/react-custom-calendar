import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
    <div>
      <App />
    </div>,
  document.getElementById('root')
)

// serviceWorker.unregister();
