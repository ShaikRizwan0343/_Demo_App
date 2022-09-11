import React from 'react';
import {LogBox, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation/RootNavigation';
import {Store} from './src/redux/Store';

const App = () => {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}} edges={['top']}>
        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
