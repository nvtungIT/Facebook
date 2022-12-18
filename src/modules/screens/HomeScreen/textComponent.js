import { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

export default TextComponent = ({ content, type }) => {
  const showhideButton = content.length > 300 ? true : false;
  const [numOfLine, setNumOfLine] = useState(type == 'single' ? 0 : 4);
  const changeState = () => {
    if (numOfLine == 4) setNumOfLine(0);
    else setNumOfLine(4);
  };

  return (
    <View>
      <Text numberOfLines={numOfLine}>{content}</Text>
      {!(type == 'single') && showhideButton && (
        <Text onPress={changeState}>Show/hide</Text>
      )}
    </View>
  );
};
