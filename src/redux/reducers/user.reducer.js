import createReducer from 'skydreamer/utils/createReducer';

import {
    SET_AUTH_STATE,
    SET_AUTH_TOKEN,
    SET_FIREBASE_ID,
    SET_USER,
} from 'skydreamer/redux/actions/types';

const initialState = {
  authenticated: false,
  authToken: null,
  firebaseUid: null,
  uid: null,
  user: null,
};

export default createReducer(initialState, {
  [SET_AUTH_STATE](state, action) {
    const { authenticated, uid } = action;
    return { ...state, uid, authenticated };
  },
  [SET_AUTH_TOKEN](state, action) {
    const { authToken } = action;
    return { ...state, authToken };
  },
  [SET_FIREBASE_ID](state, action) {
    const { firebaseUid } = action;
    return { ...state, firebaseUid };
  },
  [SET_USER](state, action) {
    if (action.remote) return state;
    return { ...state, user: action.value };
  },
});
