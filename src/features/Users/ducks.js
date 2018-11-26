import uuidv1 from 'uuid';
import { omit } from 'lodash';

export const DELETE_USER = 'users/DELETE_USER';
export const ADD_USER_REQUEST = 'users/ADD_USER_REQUEST';
export const ADD_USER = 'users/ADD_USER';
export const ADD_USER_INVALID = 'users/ADD_USER_INVALID';

export const deleteUser = id => ({
  type: DELETE_USER,
  id,
});

export const addUser = data => ({
  type: ADD_USER_REQUEST,
  payload: data,
});

export const addValidUser = ({ email, name, subscription }) => {
  const id = uuidv1();
  return {
    type: ADD_USER,
    id,
    payload: {
      id,
      email,
      name,
      date: Date.now(),
      subscription: +subscription,
    },
  };
};

export const addUserInvalid = () => ({
  type: ADD_USER_INVALID,
});

const initialState = {
  data: {
    'f2707238-a17b-4716-8deb-471da1ac0fe5': {
      id: 'f2707238-a17b-4716-8deb-471da1ac0fe5',
      email: 'mimimichka@mail.ru',
      name: 'Mihail',
      date: 1541111160381,
      subscription: 2,
    },
    'b575b675-5859-4898-af25-b13e67147c95': {
      id: 'b575b675-5859-4898-af25-b13e67147c95',
      email: 'vadimka@yandex.ru',
      name: 'Vadim',
      date: 1542121160381,
      subscription: 1,
    },
  },
  form: {
    error: false,
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: action.payload,
        },
        form: {
          error: false,
        },
      };
    case ADD_USER_INVALID:
      return {
        ...state,
        form: {
          error: true,
        },
      };
    case DELETE_USER:
      return {
        ...state,
        data: {
          ...omit(state.data, [action.id]),
        },
      };
    default:
      return state;
  }
};
