// index.js will serve as the root reducer for our redux app
// combineReducers allows you to create multiple reducers and pass
// them to the app's store
import { combineReducers } from 'redux';
import users from './Users_Reducer';

export default combineReducers({
  users: users
});
