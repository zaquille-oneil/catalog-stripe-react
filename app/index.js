import React from 'react'; //this method of importing is es6 btw
import ReactDOM from 'react-dom';
import App from 'components/app.js';
import reducers from 'reducers';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

//creating our store, which solves the error with redux and actions
const store = applyMiddleware(ReduxPromise)(createStore)(reducers);
//we want the store to be available to our entire application, not just product lists
//we will wrap the root component in a provider

//the script tag <div>...</div> below is not html, it is JSX, which babel turns into javascript
ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>
   , document.getElementById('app'));
//we have essentially put our store within our provider, makign the store available to the entire application
