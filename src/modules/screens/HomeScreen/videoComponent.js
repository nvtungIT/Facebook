import { View, Text } from 'react-native';
import Video from 'react-native-video';

export default VideoComponent = (params) => {
  const { video } = params;
  console.log(video);
  return (
    <View>
      <Text>Video here</Text>
      {/* <Video
        repeat={true}
        source={{ uri: video.url }}
        style={{ width: 300, height: 300 }}
        controls={true}
      /> */}
    </View>
  );
};
