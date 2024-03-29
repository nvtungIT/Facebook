import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  RefreshControl,
  Animated,
  LogBox,
} from 'react-native'
import PostComponent from '../PostComponent'
import { CommentInputComp } from '../CommentComponent'
import { useState, useCallback, useRef } from 'react'
import { set_comment } from '../function/set_comment'
import { get_comment } from '../function/get_comment'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { getStatus } from '../function/status'
import MoreOption from 'modules/views/MoreOption'
import { get_post } from '../function/get_post'
import { useEffect } from 'react'
import { getPreference } from 'libs/storage/PreferenceStorage'
import styles from './styles'
import Avatar from '../Avatar'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export default function SinglePostScreen(params) {
  console.log('single post rendering')
  const { navigation, route } = params
  const [refreshing, setRefreshing] = useState(false)
  const { postPassing, focus, setPostPassing } = route.params
  const [inputComment, setInputComment] = useState(undefined)
  const [modalShow, setModalShow] = useState(false)
  const [commentFocus, setCommentFocus] = useState(focus)
  const [post, setPost] = useState(postPassing)
  const [isposter, setIsposter] = useState(false)
  let posterStatus = post.state

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ])

  useEffect(() => {
    const checkIsPoster = async () => {
      let userid = await getPreference('UserId')
      if (userid == post.author.id) setIsposter(true)
    }
    checkIsPoster()
  }, [])

  const avatarImg =
    post.author.avatar != null
      ? { uri: post.author.avatar }
      : require('assets/images/default_avafb.jpg')

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(2000).then(() => setRefreshing(false))
  }, [])

  const goBack = () => {
    navigation.goBack()
  }

  const handleAfterEditPost = (id) => {
    console.log('handle after edit post, id:', id)
    const fetchdata = async () => {
      let post = await get_post(id)
      setPost(post)
      setPostPassing(post)
    }
    fetchdata()
  }

  const postStatus = getStatus(post.modified)

  const onPressSend = async (comment) => {
    const username = await getPreference('UserName')
    const avatar = await getPreference('UserAvatar')

    console.log('comment input: ' + comment)
    if (comment != null && comment != '') {
      let cmt = {
        id: Date.now(),
        comment: comment,
        created: Date.now() / 1000,
        poster: {
          name: username,
          avatar: avatar,
        },
      }
      setInputComment(cmt)
      set_comment({ comment: comment, postId: post.id })
      post.comment = String(Number(post.comment) + 1)
    }
  }

  const InfoComponent = () => (
    <View style={styles.cardShadow}>
      <View style={styles.topPart}>
        <Pressable style={styles.topPart.goBackIcon} onPress={goBack}>
          <Ionicons name="chevron-back" size={25} color="black" />
        </Pressable>

        <View style={styles.topPart.posterInfo}>
          <Avatar url={post.author.avatar} navigate={navigation} />
          <View>
            <Text style={styles.topPart.userNamePart}>
              {post.author.username}
              {posterStatus && (
                <Text style={styles.topPart.posterStatus}>
                  {' đang cảm thấy ' + posterStatus}
                </Text>
              )}
            </Text>
            <Text>{postStatus}</Text>
          </View>
        </View>

        <Pressable
          onPress={() => setModalShow(true)}
          style={styles.topPart.moreicon}
        >
          <FeatherIcon name="more-horizontal" size={20} color="black" />
        </Pressable>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <MoreOption
        setvisible={setModalShow}
        visible={modalShow}
        post={post}
        updatePosts={goBack}
        navigate={navigation}
        handleAfterEditPost={handleAfterEditPost}
        isposter={isposter}
      />
      <InfoComponent />
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <PostComponent
          postPassing={post}
          type={'single'}
          goBack={goBack}
          inputComment={inputComment}
          setCommentFocus={setCommentFocus}
          navigate={navigation}
        />
      </ScrollView>
      {post.can_comment == '1' && (
        <CommentInputComp
          focus={commentFocus}
          onPressSend={onPressSend}
          navigate={navigation}
        />
      )}
    </SafeAreaView>
  )
}
