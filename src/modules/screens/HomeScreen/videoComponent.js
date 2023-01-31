import { View, Text } from 'react-native'
import Video from 'react-native-video'

export default VideoComponent = (params) => {
  const { video } = params
  return (
    <View>
      <Video
        repeat={true}
        source={{ uri: video.url }}
        style={{ width: '100%', height: 300 }}
        controls={true}
      />
    </View>
  )
}
