import React, { Component, useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
  TouchableHighlight,
} from 'react-native'

export default function NotificationScreen(props) {
  console.log('NotificationScreen is rendering !!!!')

  const data = [
    {
      id: '001',
      post_title: 'Heavy weight',
      post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      post_city: "New York",
      username: "Chu Manh Tien",
      notification: "Like your post",
      time: "10:00"
    },
    {
      id: '002',
      post_title: 'Heavy weight',
      post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      post_city: "New York",
      username: "Chu Manh Tien",
      notification: "Like your post",
      time: "10:00"
    },
    {
      id: '003',
      post_title: 'Heavy weight',
      post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      post_city: "New York",
      username: "Chu Manh Tien",
      notification: "Like your post fkjasfdlkjasdfkjlkfjlkdsjfkladsjfkldsfjkls",
      time: "10:00"
    },
    {
      id: '004',
      post_title: 'Heavy weight',
      post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      post_city: "New York",
      username: "Chu Manh Tien",
      notification: "Like your post",
      time: "10:00"
    },
    {
      id: '005',
      post_title: 'Heavy weight',
      post_image: 'https://th.bing.com/th/id/R.3d30142609919513cf39e239dc282cf1?rik=PPVfQJg64iqX8A&riu=http%3a%2f%2fwww.funcage.com%2fblog%2fwp-content%2fuploads%2f2014%2f03%2fThe-Forbidden-City.jpg&ehk=g9el7g%2fEAznyeIyFhVdxj3%2fH8pwYcv1CA1K5mbWCZh4%3d&risl=&pid=ImgRaw&r=0',
      post_city: "New York",
      username: "Chu Manh Tien",
      notification: "Like your post",
      time: "10:00"
    },

  ]
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ fontSize: 20, color: 'black' }}>NotificationScreen</Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.container}
                onPress={() => {}}
              >
                <View style={styles.headerLeftImageWrap}>
                  <Image
                    style={styles.headerLeftImage}
                    source = {{uri: item.post_image}}
                  />
                  
                </View>
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                  <View style={{position: 'relative'}}>
                    <Text style={{ color: '#106ADF', fontSize: 15, marginBottom: 10 }}>
                      {item.username}
                      <Text style={{ color: '#646768' }}>{ item.notification }</Text>
                    </Text>
                    <Text style={ styles.time}>{ item.time }</Text>
                  </View>
                  <View>
                    <Text>More options</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    with: '100%',
    height: '100%',
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    // marginHorizontal: 30
  },
  text: {
    color: 'black'
  },
  headerLeftImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  headerLeftImageWrap: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginLeft: 15,
  },
  time: {
    color: '#64678',
  }
})