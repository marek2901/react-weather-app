import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main/components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Provider} from 'react-redux'
import store from './store'

import registerServiceWorker from './registerServiceWorker';

const App = () => (<MuiThemeProvider>
  <Main/>
</MuiThemeProvider>);

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
