import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main/components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Provider} from 'react-redux'
import store from './store'

import { BrowserRouter } from 'react-router-dom'

const App = () => <MuiThemeProvider>
  <Main/>
</MuiThemeProvider>;

const ReduxApp = () => <Provider store={store}>
  <App/>
</Provider>;

ReactDOM.render(<BrowserRouter>
  <ReduxApp />
</BrowserRouter>, document.getElementById('root'));
