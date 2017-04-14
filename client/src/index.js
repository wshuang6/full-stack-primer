import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/cheese';
import {Provider} from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <CheeseList />
  </Provider>,
  document.getElementById('root')
);
