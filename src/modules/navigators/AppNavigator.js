import { Button, TouchableOpacity } from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/FontAwesome'

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
import AllFriendView from 'modules/views/AllFriendView'
import SuggestedFriendView from 'modules/views/SuggestedFriendView'
import ExistAccScreen from 'modules/screens/LoginScreen/LoginExistAcc/ExistAccScreen'
import LoginWithExistAccScreen from 'modules/screens/LoginScreen/LoginExistAcc/LoginWithExistAccScreen'
import LoginScreen from 'modules/screens/LoginScreen'
import SearchFriendView from 'modules/views/SearchFriendView'
import UpdatesFromFriendsNotification from 'modules/screens/MenuScreen/Setting/NotificationSetting/UpdatesFromFriendsNotification'
import PushNotificationSetting from 'modules/screens/MenuScreen/Setting/NotificationSetting/PushNotificationSetting'
import CommentsNotification from 'modules/screens/MenuScreen/Setting/NotificationSetting/CommentsSetting'
import FriendRequestsNotification from 'modules/screens/MenuScreen/Setting/NotificationSetting/FriendRequestsSetting'
import PeopleMayKnowNotification from 'modules/screens/MenuScreen/Setting/NotificationSetting/PeopleMayKnowSetting'
import BirthdaysNotification from 'modules/screens/MenuScreen/Setting/NotificationSetting/BirthdaysSetting'
import VideoNotification from 'modules/screens/MenuScreen/Setting/NotificationSetting/VideosSetting'
const Stack = createNativeStackNavigator()

export default AppNavigator = (navigation) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          {/* <Stack.Screen
            name={ScreenNames.signUpScreen}
            component={SignupScreen}
            options={{ headerShown: false }}
          /> */}

          {/* <Stack.Screen
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
            name={ScreenNames.homeScreen}
            component={HomeScreen}
            options={{ headerShown: false }}
          /> */}
        </Stack.Group>

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
          <Stack.Screen name={ScreenNames.setting} component={Setting} />
          <Stack.Screen name={ScreenNames.inforUser} component={InforUser} />
          <Stack.Screen name={ScreenNames.security} component={Security} />
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
            name={ScreenNames.updatesFromFriendsNotification}
            component={UpdatesFromFriendsNotification}
          />
          {/* Sửa component */}
          <Stack.Screen
            name={ScreenNames.commentsNotification}
            component={CommentsNotification}
          />
          <Stack.Screen
            name={ScreenNames.friendRequestsNotification}
            component={FriendRequestsNotification}
          />
          <Stack.Screen
            name={ScreenNames.peopleMayKnowNotification}
            component={PeopleMayKnowNotification}
          />
          <Stack.Screen
            name={ScreenNames.birthdaysNotification}
            component={BirthdaysNotification}
          />
          <Stack.Screen
            name={ScreenNames.videoNotification}
            component={VideoNotification}
          />
          <Stack.Screen
            name={ScreenNames.pushNofitication}
            component={PushNotificationSetting}
          />
        </Stack.Group>
        <Stack.Group></Stack.Group>

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
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
