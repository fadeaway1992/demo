import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer, ACTION_UPDATE_WORKS } from './reducer'
import { sourceData } from './souceData'
import App from './App'

const initApp = () => {
  const demoStore = createStore(reducer)
  demoStore.dispatch({ type: ACTION_UPDATE_WORKS, payload: sourceData })

  ReactDom.render(<Provider store={demoStore}><App /></Provider>, document.querySelector('#app'))
}

window.addEventListener('DOMContentLoaded', initApp)




