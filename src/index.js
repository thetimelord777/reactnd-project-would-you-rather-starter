import React from 'react'
import ReactDOM from 'react-dom'
import App from './Component/App'
import { Provider } from 'react-redux'
import  {BrowserRouter} from 'react-router-dom'
import reducers from './Reducers/root'
import middleware from './Middleware/root'
import { createStore } from 'redux'

const store = createStore(reducers,middleware)

ReactDOM.render(
    <BrowserRouter>
    <Provider store = {store}>  
      <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

