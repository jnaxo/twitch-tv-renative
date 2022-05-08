import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'renative';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { init } from '@noriginmedia/norigin-spatial-navigation';
import { STYLES } from '../config';
import Router from '../router';
import { store } from '../store';
import { Loading } from '../components';
import { authHelpers } from '../utils/helpers';

init({
  debug: true,
  visualDebug: true
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
