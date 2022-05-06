import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { mainStyles } from './styles';
import { FETCH_CHANNELS_LIVE } from '../../store/types';

const LiveChannels = ({ fetchLiveChannels }) => {
  useEffect(() => {
    fetchLiveChannels();
  }, []);

  return (
    <View><Text style={mainStyles.title}>{'Live channels'}</Text></View>
  );
};

const actionsToProps = dispatch => ({
  fetchLiveChannels: () => dispatch({ type: FETCH_CHANNELS_LIVE })
});

export default connect(null, actionsToProps)(LiveChannels);
