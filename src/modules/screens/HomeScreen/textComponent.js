import { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

export default TextComponent = ({ content, type }) => {
  const showButton = content.length > 300 ? true : false;
  const [numOfLine, setNumOfLine] = useState(4);
  const changeState = () => {
    if (numOfLine == 3) setNumOfLine(0);
    else setNumOfLine(3);
  };

  return (
    <View>
      <Text numberOfLines={numOfLine}>{content}</Text>
      {!(type == 'single') && showButton && (
        <Text onPress={changeState}>Show/hide</Text>
      )}
    </View>
  );
};
