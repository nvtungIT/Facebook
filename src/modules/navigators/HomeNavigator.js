import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenNames from 'general/constants/ScreenNames';
import SinglePostScreen from 'modules/screens/HomeScreen/SinglePostScreen';
import HomeScreen from 'modules/screens/HomeScreen';
import AddPost from 'modules/views/CreatePost';

const Tab = createNativeStackNavigator();

export default HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={ScreenNames.homeScreen}
        component={HomeScreen}
      />
      <Tab.Screen
        name={ScreenNames.singlePostScreen}
        component={SinglePostScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ScreenNames.addPostScreen}
        component={AddPost}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
