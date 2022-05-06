import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import channelsReducer from './channels/slice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    channels: channelsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(rootSaga);
