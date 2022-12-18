import { View, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenNames from 'general/constants/ScreenNames';
import MainTabNavigator from './MainTabNavigator';
import SinglePostScreen from '../screens/HomeScreen/SinglePostScreen';

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.mainTab}
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.singlePostScreen}
          component={SinglePostScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
