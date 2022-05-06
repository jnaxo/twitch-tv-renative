import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'renative';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import { STYLES } from '../config';
import Router from '../router';
import { store } from '../store';
import { Loading } from '../components';
import { authHelpers } from '../utils/helpers';

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
  const [token, setToken] = useState('');

  useEffect(() => {
    // Required for tizen
    if (window.focus) window.focus();
    authHelpers.getPublicAccess(setToken);
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {!token ? <Loading /> : <Router />}
      </View>
    </Provider>
  );
};

export default App;
