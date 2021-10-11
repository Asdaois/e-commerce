import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  auth,
  createUserProfileDocument,
  googleProvider,
} from "../../firebase/firebase.utils";
import { googleSigInFailure, googleSigInSuccess } from "./user.actions";
import { UserActionTypes } from "./user.types";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSigInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(googleSigInFailure(error)) 
  }

}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIG_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
