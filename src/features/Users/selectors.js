import { createSelector } from 'reselect';
import { get } from 'lodash';

export const usersSelector = state => state.users;

export const usersDataSelector = createSelector(
  usersSelector,
  state => state.data,
);

export const isEmailUnique = createSelector(
  usersDataSelector,
  (_, email) => email,
  (users, email) => !Object.keys(users).find(key => users[key].email === email),
);

export const userFormErrorSelector = createSelector(
  usersSelector,
  state => get(state, 'form.error', false),
);
