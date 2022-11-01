import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

import FriendScreen from '../screens/FriendScreen';

import MenuScreen from '../screens/MenuScreen';

import ScreenNames from '../../general/constants/ScreenNames';

import MainTabNavigator from './MainTabNavigator';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.mainTab}
            component={MainTabNavigator}
            options={{headerShown: false}}
          />
         
        </Stack.Group>
        <Stack.Group>
        <Stack.Screen
            name={ScreenNames.homeScreen}
            component={HomeScreen}
            options={{headerShown: false}}
          />  
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
