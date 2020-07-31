// Combined Reducers

import { createStore, combineReducers, applyMiddleware } from 'redux'; // Redux
import { createForms } from 'react-redux-form'; // Using Redux Form
import thunk from 'redux-thunk'; // Redux Thunk
import logger from 'redux-logger'; // Redux Logger
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger) // Middleware
    );

    return store;
}