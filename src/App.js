import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from 'modules/navigators/AppNavigator';
import SignupScreen from 'modules/screens/SignupScreen';
import AddPost from 'modules/views/CreatePost';
import LoginScreen from 'modules/screens/LoginScreen';
import ExistAccScreen from 'modules/screens/LoginScreen/LoginExistAcc/ExistAccScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <AppNavigator />
      <AddPost postData={{ isEditing: true, id: '63c5ffe8febc5c12a0b8a7f9' }} />
      {/* <SignupScreen/> */}
    </SafeAreaProvider>
  );
}
export default App;
