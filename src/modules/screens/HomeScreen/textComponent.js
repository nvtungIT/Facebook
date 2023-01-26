import { View, Text } from 'react-native';

export default TextComponent = ({ content, numLine }) => {
  return (
    <View>
      <Text numberOfLines={numLine} selectable={true}>
        {content}
      </Text>
    </View>
  );
};
