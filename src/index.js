import React from 'react'
import ReactDOM from 'react-dom'
import App from './Component/App'
import { Provider } from 'react-redux'
import  {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <Provider>  
      <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

