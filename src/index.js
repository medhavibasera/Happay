import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import './index.css';
import App from './App.js';

ReactDOM.render(
<Provider store={store}>
     <PersistGate persistor={persistor}>
       <App />
    </PersistGate>
  </Provider>,
   document.getElementById('root')
);

