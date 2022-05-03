import React, { useEffect } from 'react';
import { StyleSheet } from 'renative';
import { View } from 'react-native';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import { STYLES } from '../config';
import Router from '../router';

initNavigation({
  debug: false,
  visualDebug: false,
  nativeMode: false
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: STYLES.COLOR.BLACK,
    flex: 1
  }
});

const App = () => {
  useEffect(() => {
    // Required for tizen
    if (window.focus) window.focus();
  }, []);

  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
};

export default App;
