import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSigInStart = () => ({
  type: UserActionTypes.GOOGLE_SIG_IN_START
})

export const googleSigInSuccess = (user) => ({
  type: UserActionTypes.GOOGLE_SIG_IN_SUCCESS,
  payload: user,
})

export const googleSigInFailure = (error) => ({
  type: UserActionTypes.GOOGLE_SIG_IN_FAILURE,
  payload: error
})

export const emailSigInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIG_IN_START,
  payload: emailAndPassword
})

export const emailSigInSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIG_IN_SUCCESS,
  payload: user,
})

export const emailSigInFailure = (error) => ({
  type: UserActionTypes.EMAIL_SIG_IN_FAILURE,
  payload: error
})