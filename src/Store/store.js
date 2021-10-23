import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initinalState from './InitialState';
import reducerCity from './Reducers/activeCity';



const store = createStore(
    reducerCity,
    initinalState,
    composeWithDevTools(
      applyMiddleware()
    )
  );


export default store;