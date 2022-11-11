import React, { Component } from "react"
import AppNavigator from "./modules/navigators/AppNavigator"
import LoginScreen from "./modules/screens/LoginScreen"
import ExistAccScreen from "./modules/screens/LoginScreen/LoginExistAcc/ExistAccScreen"
import LoginWithExistAccScreen from "./modules/screens/LoginScreen/LoginExistAcc/LoginWithExistAccScreen"
function App() {
	return (
		// <LoginScreen />
		<ExistAccScreen />
		// <LoginWithExistAccScreen/>
	)
}
export default App