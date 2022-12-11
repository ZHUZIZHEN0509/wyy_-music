import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'normalize.css' //样式重置
import './assets/css/index.less' //自定义样式组件公用

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
