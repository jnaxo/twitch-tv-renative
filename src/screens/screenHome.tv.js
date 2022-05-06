import React from 'react';
import { getScaledValue, StyleSheet } from 'renative';
import { View, Text } from 'react-native';
import { LiveChannels } from '../components';
import { STYLES } from '../config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: getScaledValue(20),
    color: STYLES.COLOR.WHITE,
  }
});

const ScreenHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Hello World!'}</Text>
      <LiveChannels />
    </View>
  );
};

export default ScreenHome;
