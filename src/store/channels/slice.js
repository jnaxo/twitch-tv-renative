import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  live: [],
  pagination: {
    cursor: ''
  }
};

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setChannelsLive: (state, { payload }) => {
      state.live = payload.data;
      state.pagination.cursor = payload.pagination?.cursor;
    }
  }
});

export const { setChannelsLive } = channelsSlice.actions;

export default channelsSlice.reducer;
