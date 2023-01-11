import { View, Text } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignupScreen from 'modules/screens/SignupScreen'
import HomeScreen from 'modules/screens/HomeScreen'
import FriendScreen from 'modules/screens/FriendScreen'
import MenuScreen from 'modules/screens/MenuScreen'
import ScreenNames from 'general/constants/ScreenNames'
import MainTabNavigator from './MainTabNavigator'
import TermsPolocies from 'modules/screens/MenuScreen/TermsPolicies'
import Setting from 'modules/screens/MenuScreen/Setting'
import InforUser from 'modules/screens/MenuScreen/Setting/InforUser'
import Security from 'modules/screens/MenuScreen/Setting/Security'
import Block from 'modules/screens/MenuScreen/Setting/Block'
import NotificationSetting from 'modules/screens/MenuScreen/Setting/NotificationSetting'
import NameSetting from 'modules/screens/MenuScreen/Setting/InforUser/NameSetting'

const Stack = createNativeStackNavigator()

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Group>
          <Stack.Screen
            name={ScreenNames.mainTab}
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
      </Stack.Group>
      <Stack.Group>
          <Stack.Screen
            name={ScreenNames.termsPolicies}
            component={TermsPolocies}
          />
          <Stack.Screen
            name={ScreenNames.setting}
            component={Setting}
          />
          <Stack.Screen
            name={ScreenNames.inforUser}
            component={InforUser}
          />
          <Stack.Screen
            name={ScreenNames.security}
            component={Security}
          />
          <Stack.Screen
            name={ScreenNames.block}
            component={Block}
          />
          <Stack.Screen
            name={ScreenNames.notificationSetting}
            component={NotificationSetting}
          />
          <Stack.Screen
            name={ScreenNames.nameSetting}
            component={NameSetting}
          />
      </Stack.Group>
      <Stack.Group>
          <Stack.Screen
            name={ScreenNames.signUpScreen}
            component={SignupScreen}
            options={{headerShown: false}}
          />  
        </Stack.Group>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
