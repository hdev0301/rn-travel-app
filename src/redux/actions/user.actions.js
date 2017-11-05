import Debug from 'skydreamer/utils/debugger';
import backend from 'skydreamer/utils/backend';
import { Actions } from 'react-native-router-flux';
import {
    SET_USER,
    SET_USER_PHOTO,
    SET_USER_SETTINGS,
} from 'skydreamer/redux/actions/types';


export const loadProfile = (id, remote = false) => async (dispatch) => {
  try {
    const response = await backend.loadUser(id, remote);
    console.warn(JSON.stringify(response, null, 2));
    dispatch({ type: SET_USER, remote, value: response });
  } catch (e) {
    Debug.error(e);
  }
};

export const openSettings = () => (dispatch) => {

};
