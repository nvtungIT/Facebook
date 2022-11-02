import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppNavigator from 'modules/navigators/AppNavigator'
import AddPost from 'modules/views/CreatePost'

function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <AppNavigator /> */}
      <AddPost />
    </SafeAreaProvider>
  )
}
export default App
