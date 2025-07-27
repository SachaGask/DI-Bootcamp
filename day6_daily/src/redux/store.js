import { configureStore } from 'redux';
import plannerReducer from './reducer';

const store = configureStore({
  reducer: plannerReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
