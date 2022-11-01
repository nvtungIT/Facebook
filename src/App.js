import React, {Component} from 'react';
import AppNavigator from './modules/navigators/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
export default App;
