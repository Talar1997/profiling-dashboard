import { userConstants } from '../actionTypes/userTypes';

export const loginUser = (user) => {
 return {type: userConstants.LOGIN_SUCCESS, user}
}

export const logoutUser = (user = null) => {
  return {type: userConstants.LOGOUT, user}
}
  