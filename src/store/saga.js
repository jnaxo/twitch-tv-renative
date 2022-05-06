import { all } from 'redux-saga/effects';
import channels from './channels/saga';

export default function* rootSaga() {
  yield all([...channels]);
}
