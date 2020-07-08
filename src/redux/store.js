import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import fetchreducer from './reducers/fetchDatareducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['fetchData']
}

const rootReducer = combineReducers({
    fetchData: fetchreducer
});

const persistrootreducer = persistReducer(persistConfig,rootReducer);

const middleWares = [thunk];

export const store = createStore(persistrootreducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

// export default {store, persistor};