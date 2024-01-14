import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(reducer, applyMiddleware());
const store = configureStore({
    reducer: {
        movies: reducer
    }
})

export default store;