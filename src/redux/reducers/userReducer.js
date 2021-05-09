import {userConstants} from '../types/userTypes';

const userDefaultState = {
  _id: null,
  role: null,
  active: false,
  name: null,
  email: null,
  lastLogin: null,
  expires: null
}

export function user(state = userDefaultState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return state;
    case userConstants.LOGOUT:
      return state;
    default:
      return state;
  }
}