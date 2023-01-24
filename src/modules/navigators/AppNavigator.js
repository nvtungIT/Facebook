import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainTabNavigator from './MainTabNavigator'
import SignupScreen from 'modules/screens/SignupScreen'
import FriendScreen from 'modules/screens/FriendScreen'
import MenuScreen from 'modules/screens/MenuScreen'
import TermsPolocies from 'modules/screens/MenuScreen/TermsPolicies'
import Setting from 'modules/screens/MenuScreen/Setting'
import InforUser from 'modules/screens/MenuScreen/Setting/InforUser'
import Security from 'modules/screens/MenuScreen/Setting/Security'
import Block from 'modules/screens/MenuScreen/Setting/Block'
import NotificationSetting from 'modules/screens/MenuScreen/Setting/NotificationSetting'
import NameSetting from 'modules/screens/MenuScreen/Setting/InforUser/NameSetting'
import ChangePassword from 'modules/screens/MenuScreen/Setting/Security/ChangePassword'
import AddBlock from 'modules/screens/MenuScreen/Setting/Block/AddBlock'

import AllFriendView from 'modules/views/AllFriendView'
import SuggestedFriendView from 'modules/views/SuggestedFriendView'
import ExistAccScreen from 'modules/screens/LoginScreen/LoginExistAcc/ExistAccScreen'
import LoginWithExistAccScreen from 'modules/screens/LoginScreen/LoginExistAcc/LoginWithExistAccScreen'
import LoginScreen from 'modules/screens/LoginScreen'
import SearchFriendView from 'modules/views/SearchFriendView'
import ProfileView from 'modules/views/ProfileView'
import ScreenNames from 'general/constants/ScreenNames'
const Stack = createNativeStackNavigator()

export default AppNavigator = (navigation) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.loginScreen}
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ScreenNames.signupScreen}
            component={SignupScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={ScreenNames.existAccScreen}
            component={ExistAccScreen}
          />

          <Stack.Screen
            name={ScreenNames.loginWithExistAccScreen}
            component={LoginWithExistAccScreen}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.mainTab}
            component={MainTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen
            name={ScreenNames.termsPolicies}
            component={TermsPolocies}
          />
          <Stack.Screen name={ScreenNames.setting} component={Setting} />
          <Stack.Screen name={ScreenNames.inforUser} component={InforUser} />
          <Stack.Screen
            name={ScreenNames.security}
            component={Security}
            options={{title: ''}}
          />
          <Stack.Screen name={ScreenNames.block} component={Block} />
          <Stack.Screen
            name={ScreenNames.notificationSetting}
            component={NotificationSetting}
          />
          <Stack.Screen
            name={ScreenNames.nameSetting}
            component={NameSetting}
          />
          <Stack.Screen
            name={ScreenNames.changePassword}
            component={ChangePassword}
          />
          <Stack.Screen
            name={ScreenNames.addBlock}
            component={AddBlock}
            options={{headerShown: false}}
          />
      </Stack.Group>
      <Stack.Group>
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen
            name={ScreenNames.suggestedFriendView}
            component={SuggestedFriendView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ScreenNames.allFriendView}
            component={AllFriendView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ScreenNames.searchFriendView}
            component={SearchFriendView}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ScreenNames.profileView}
            component={ProfileView}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
