import { combineReducers } from 'redux';
import { usersReducer } from './features/Users';

export const mainReducer = () =>
  combineReducers({
    users: usersReducer,
  });
