import { configureStore } from '@reduxjs/toolkit';
import {counterReducer} from './reducers'

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;