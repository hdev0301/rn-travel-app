import Debug from 'skydreamer/utils/debugger';
import backend from 'skydreamer/utils/backend';
import { Actions } from 'react-native-router-flux';
import {
    SET_SWIPECARD_FETCHING,
    SET_SWIPECARD_EMPTY,
    POP_SWIPECARD,
    APPEND_SWIPECARDS,
} from 'skydreamer/redux/actions/types';

export const onOfferApproved = card => async (dispatch) => {
  Debug.log('Offer approved');
  dispatch({ type: POP_SWIPECARD, id: card.id });
  if (card.isMatch) {
    Actions.match(card);
  }
};

export const onOfferDeclined = card => async (dispatch) => {
  Debug.log('Offer declined');
  dispatch({ type: POP_SWIPECARD, id: card.id });
};

export const fetchCards = page => async (dispatch) => {
  Debug.log(`Start fetch cards PAGE ${page}`);
  try {
    dispatch({ type: SET_SWIPECARD_FETCHING, value: true });
    const fetchResponse = await backend.fetchSwipeCards(page);
    const { cards, groupUsers } = fetchResponse;

    dispatch({ type: APPEND_SWIPECARDS, cards, groupUsers });
    dispatch({ type: SET_SWIPECARD_EMPTY, value: cards.length < 10 });
    dispatch({ type: SET_SWIPECARD_FETCHING, value: false });
  } catch (e) {
    Debug.error(e); // TODO: Error handling
    dispatch({ type: SET_SWIPECARD_FETCHING, value: false });
  }
};
