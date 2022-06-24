import {applyMiddleware,compose} from 'redux';
import { createStore } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import appReducer from "./appReducer.js"
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer,composeEnhancers(applyMiddleware()));
const persistor= persistStore(store);

export{store,persistor};