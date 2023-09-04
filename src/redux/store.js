import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers';
import ansReducer from './reducersAns';
import opReducer from './reducersOperator';
import numReducer from './reducersInitialNum';
import strAnsReducer from './reducerAnsString';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    ans:ansReducer,
    strAns:strAnsReducer,
    op:opReducer,
    num:numReducer
  },
});

export default store;