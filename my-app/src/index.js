import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import App from './components/App/App';
import reducer from './reducers';
import {userState} from "./localStorage/userState";
import {setUserState} from "./localStorage/setUserState";

import registerServiceWorker from './registerServiceWorker';

const configureStore = () => {
  const userDetails = userState('state');
  const store = createStore(
    reducer,
    userDetails,
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  
  store.subscribe(
    throttle(() => {
      setUserState(
        {
          authState: store.getState().authState,
          loginlogout: store.getState().loginlogout,
        },
        'state'
      );
    }, 1000)
  );
  
  return store;
};

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
