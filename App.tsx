import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import app from './store/reducers/appReducer';
import Navigation from './navigations/appNavigation'
import ReduxThunk from 'redux-thunk';

const reducers = {
  app: app
};

const rootReducer = combineReducers(reducers)
const store: any = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
