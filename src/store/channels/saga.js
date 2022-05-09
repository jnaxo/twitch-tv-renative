import { takeLatest, put, call } from 'redux-saga/effects';
import { channels } from '../../network'
import { FETCH_CHANNELS_LIVE } from './types';
import { setChannelsLive } from './slice';

function* fetchChannelsLive() {
  try {
    const response = yield call(channels.getChannelList);
    console.log('res', response);
    payload = response.data
    yield put(setChannelsLive(payload));
  } catch (e) {
    // TODO: catch errors
    console.log('saga fetchChannelsLive error', e);
  }
}

function* watchFetchChannelsLive() {
  yield takeLatest(FETCH_CHANNELS_LIVE, fetchChannelsLive);
}

export default [
  watchFetchChannelsLive()
];
