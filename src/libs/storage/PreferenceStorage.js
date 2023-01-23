import AsyncStorage from '@react-native-async-storage/async-storage';
// Get preference value with key
export const getPreference = async (key = '', defaultValue = null) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('Just get Preferrent Key: ' + key + ', Value:' + value);
    return value;
  } catch (e) {
    return defaultValue;
  }
};

// Save preference key - value
export const setPreference = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Set Preferrent Key: ' + key + ', Value:' + value);
    return true;
  } catch (error) {
    // Error saving data
    console.error(error);
    return false;
  }
};
