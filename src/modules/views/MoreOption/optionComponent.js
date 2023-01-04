import { View, Text, StyleSheet } from 'react-native';

export default OptionComponent = ({ optionName }) => {
  return (
    <View style={styles.option}>
      <Text>Icon - {optionName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({ option: { margin: 15 } });
