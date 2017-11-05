import createReducer from 'skydreamer/utils/createReducer';

import {
    SET_SWIPECARD_FETCHING,
    SET_SWIPECARD_EMPTY,
    POP_SWIPECARD,
    APPEND_SWIPECARDS,
} from 'skydreamer/redux/actions/types';

const initialState = {
  fetchRequired: true,
  fetchPageIndex: 0,
  fetching: false,
  empty: false,
  error: false,
  ignoreCards: [],
  groupUsers: { },
  collection: [],
};

export default createReducer(initialState, {
  [POP_SWIPECARD](prevState, action) {
    let collection = Object.assign(prevState.collection);
    collection = collection.slice(1);
    const ignoreCards = prevState.ignoreCards.concat(action.id);
    const returnValue = { ...prevState, collection, ignoreCards };
    if (collection.length <= 5 && !returnValue.fetchRequired) {
      returnValue.fetchRequired = true;
      returnValue.fetchPageIndex += 1;
    }
    return returnValue;
  },
  [APPEND_SWIPECARDS](prevState, action) {
    const { cards, groupUsers } = action;
    const { ignoreCards } = prevState;
    const filtered = [];
    cards.forEach((card) => {
      if (ignoreCards.includes(card.card_id)) return;
      filtered.push(card);
    });
    const collection = prevState.collection.concat(filtered);
    return { ...prevState, collection, groupUsers };
  },
  [SET_SWIPECARD_FETCHING](prevState, action) {
    const { value } = action;
    return { ...prevState, fetching: value, fetchRequired: false };
  },
  [SET_SWIPECARD_EMPTY](prevState, action) {
    const { value } = action;
    return { ...prevState, fetching: value };
  },
});
