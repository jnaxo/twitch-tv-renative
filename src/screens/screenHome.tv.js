import React, { useEffect } from 'react';
import { getScaledValue, StyleSheet } from 'renative';
import { View } from 'react-native';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { LiveChannels } from '../components';
import { STYLES } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: getScaledValue(20),
    color: STYLES.COLOR.WHITE,
  }
});

const ScreenHome = () => {
  const { setFocus } = useFocusable();

  useEffect(() => {
  //  setFocus('liveChannels');
  }, [])

  return (
    <View style={styles.container} preferredChildFocusKey>
      <LiveChannels />
    </View>
  );
};

export default ScreenHome;
