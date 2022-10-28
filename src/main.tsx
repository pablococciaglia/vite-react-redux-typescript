import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import store from './store/Store'
import { Provider } from "react-redux"
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
