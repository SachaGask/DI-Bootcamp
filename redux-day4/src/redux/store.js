import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../posts/state/slice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;