import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import contentReducer from './reducers/content';
import bucketsReducer from './reducers/buckets';

const rootReducer = combineReducers({
    videos : contentReducer,
    buckets : bucketsReducer
  })

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
