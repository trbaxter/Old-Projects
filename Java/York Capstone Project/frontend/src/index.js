import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reducer from "./modules/Reducer";
import {getStages} from './modules/requests'

const handleAsync = function(reduxApi) {
    return (next) => {
        return (action) => {
            if (typeof action == 'function') {
                return action (reduxApi.dispatch, reduxApi.getState);
            }
            next(action);
        }
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer, compose(applyMiddleware(handleAsync)));
store.dispatch(getStages());


root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

