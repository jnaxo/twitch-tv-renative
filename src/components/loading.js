import React from 'react';
import { getScaledValue, StyleSheet } from 'renative';
import { View, Text } from 'react-native';
import { STYLES } from '../config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: getScaledValue(20),
    color: STYLES.COLOR.WHITE,
  }
});

const Loading = () => (
  <View style={styles.container}>
    <Text style={styles.text}>{'Cargando ...'}</Text>
  </View>
);

export default Loading;
