import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSigInStart = () => ({
  type: UserActionTypes.GOOGLE_SIG_IN_START
})

export const sigInSuccess = (user) => ({
  type: UserActionTypes.SIG_IN_SUCCESS,
  payload: user,
})

export const sigInFailure = (error) => ({
  type: UserActionTypes.SIG_IN_FAILURE,
  payload: error
})

export const emailSigInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIG_IN_START,
  payload: emailAndPassword
})