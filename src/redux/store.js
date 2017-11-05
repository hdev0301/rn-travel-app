/**
* @providesModule skydreamer/redux/store
*/

import thunk from 'redux-thunk';
import reducers from 'skydreamer/redux/reducers';
import {
    createStore,
    applyMiddleware,
} from 'redux';

export default createStore(
    reducers,
    applyMiddleware(thunk),
);
