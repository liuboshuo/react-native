/**
 * Created by ls-mac on 2017/5/8.
 */
import React from 'react'
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer/rootReducer'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);


export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer,initialState);
    return store
}

