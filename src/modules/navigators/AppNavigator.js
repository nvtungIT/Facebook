import { Button, TouchableOpacity } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from 'modules/screens/HomeScreen'
import FriendScreen from 'modules/screens/FriendScreen'
import MenuScreen from 'modules/screens/MenuScreen'
import ScreenNames from 'general/constants/ScreenNames'
import MainTabNavigator from './MainTabNavigator'
import AllFriendView from 'modules/views/AllFriendView'
import SuggestedFriendView from 'modules/views/SuggestedFriendView'
import ExistAccScreen from 'modules/screens/LoginScreen/LoginExistAcc/ExistAccScreen'
import LoginWithExistAccScreen from 'modules/screens/LoginScreen/LoginExistAcc/LoginWithExistAccScreen'
import LoginScreen from 'modules/screens/LoginScreen'

const Stack = createNativeStackNavigator()

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen
            name={ScreenNames.allFriendView}
            component={AllFriendView}
            options={{
              headerRight: () => (
                <TouchableOpacity>
                  <Icon size={24} name="search" color="black" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name={ScreenNames.suggestedFriendView}
            component={SuggestedFriendView}
            options={{
              headerRight: () => (
                <TouchableOpacity>
                  <Icon size={24} name="search" color="black" />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Group>

        <Stack.Screen
          name={ScreenNames.loginScreen}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ScreenNames.existAccScreen}
          component={ExistAccScreen}
        />

        <Stack.Screen
          name={ScreenNames.loginWithExistAccScreen}
          component={LoginWithExistAccScreen}
        />
        <Stack.Screen
          name={ScreenNames.mainTab}
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
