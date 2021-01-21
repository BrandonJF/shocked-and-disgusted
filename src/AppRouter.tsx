// src/AppRouter.tsx

import React, { FunctionComponent, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Provider>
  </Router>
  )
}

// /*
//     EE: To replace Recoil state management with Redux Toolkit;

   

  
//  */

export default AppRouter
