import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { useState } from 'react'
import ImagesComponent from '../ImageComponent'
import TextComponent from '../textComponent'
import VideoComponent from '../videoComponent'
import CommentsComponent from '../CommentComponent'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MoreOption from 'modules/views/MoreOption'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react'
import { getStatus } from '../function/status'
import { like } from '../function/like'
import ScreenNames from 'general/constants/ScreenNames'
import OneImageModal from 'modules/views/PostOneImage'
import { get_post } from '../function/get_post'
import styles from './styles'
import { getPreference } from 'libs/storage/PreferenceStorage'
import Avatar from '../Avatar'

const window = Dimensions.get('window')

export default PostComponent = (params) => {
  const {
    postPassing,
    updatePosts,
    type,
    goBack,
    navigate,
    inputComment,
    setCommentFocus,
    ishome,
  } = params

  const [post, setPost] = useState(postPassing)
  const showhideButton = post.described?.length > 300 ? true : false
  const [numOfLine, setNumOfLine] = useState(type == 'single' ? 0 : 4)
  const [iconLikeName, setIconLikeName] = useState(
    post.is_liked == '1' ? 'like1' : 'like2',
  )
  const [iconLikeColor, setIconLikeColor] = useState(
    post.is_liked == '1' ? 'blue' : 'black',
  )
  const [numLikes, setNumLikes] = useState(Number(post.like))
  const [described, setDescribed] = useState(post.described)
  const [numCmt, setNumCmt] = useState(Number(post.comment))
  const [images, setImages] = useState(post.image)
  const [video, setVideo] = useState(post.video)
  let posterStatus = post.state
  const [isposter, setIsposter] = useState(false)

  useEffect(() => {
    const checkIsPoster = async () => {
      let userid = await getPreference('UserId')
      if (userid == post.author.id) setIsposter(true)
    }
    checkIsPoster()
  }, [])

  useEffect(() => {
    setNumLikes(Number(post.like))
    setIconLikeColor(post.is_liked == '1' ? 'blue' : 'black')
    setIconLikeName(post.is_liked == '1' ? 'like1' : 'like2')
  }, [post.like])

  useEffect(() => {
    setNumCmt(Number(post.comment))
  }, [post.comment])

  useEffect(() => {
    setDescribed(post.described)
  }, [post.described])

  useEffect(() => {
    setImages(post.image)
  }, [post.image])

  useEffect(() => {
    setVideo(post.video)
  }, [post.video])

  useEffect(() => {
    setPost(postPassing)
  }, [postPassing])

  const handleAfterEditPost = (id) => {
    console.log('handle after edit post, id:', id)
    const fetchdata = async () => {
      let post = await get_post(id)
      setPost(post)
    }
    fetchdata()
  }

  const postStatus = getStatus(post.modified)

  const changeState = () => {
    if (!(type == 'single')) {
      if (numOfLine == 4) setNumOfLine(0)
      else setNumOfLine(4)
    }
  }

  const [modalShow, setModalShow] = useState(false)
  const [singleImageShow, setSingleImageShow] = useState(false)

  const showModal = () => {
    setModalShow(true)
  }

  const onPressComment = () => {
    if (type !== 'single') {
      navigate.navigate(ScreenNames.singlePostScreen, {
        postPassing: post,
        focus: true,
        setPostPassing: setPost,
      })
    } else {
      setCommentFocus(true)
    }
  }

  const onPressLike = () => {
    if (post.is_liked == '1') {
      post.like = String(Number(post.like) - 1)
      post.is_liked = '0'
      setNumLikes(numLikes - 1)
      setIconLikeName('like2')
      setIconLikeColor('black')
    } else {
      post.like = String(Number(post.like) + 1)
      post.is_liked = '1'
      setNumLikes(numLikes + 1)
      setIconLikeName('like1')
      setIconLikeColor('blue')
    }
    like(post.id)
  }

  const onPressPostArea = (post) => {
    if (type != 'single')
      navigate.navigate(ScreenNames.singlePostScreen, {
        postPassing: post,
        handleAfterEditPost: handleAfterEditPost,
        setPostPassing: setPost,
      })
  }

  const onPressImg = () => {
    if (post.image.length == 1) {
      setSingleImageShow(true)
    } else {
      if (!(type == 'single'))
        navigate.navigate(ScreenNames.singlePostScreen, {
          postPassing: post,
          handleAfterEditPost: handleAfterEditPost,
          setPostPassing: setPost,
        })
    }
  }

  return (
    (ishome || post.video) && (
      <View style={styles.container}>
        <MoreOption
          setvisible={setModalShow}
          visible={modalShow}
          post={post}
          updatePosts={updatePosts}
          navigate={navigate}
          handleAfterEditPost={handleAfterEditPost}
          isposter={isposter}
        />
        {post.image != null && (
          <OneImageModal
            setvisible={setSingleImageShow}
            visible={singleImageShow}
            post={post}
            navigate={navigate}
            type={type}
          />
        )}
        {/* top part of post */}
        {type != 'single' && (
          <Pressable
            style={styles.topPart}
            onPress={() => onPressPostArea(post)}
          >
            {type == 'single' && (
              <Pressable style={styles.topPart.goBackIcon} onPress={goBack}>
                <Ionicons name="chevron-back" size={25} color="black" />
              </Pressable>
            )}
            <View style={styles.topPart.posterInfo}>
              <Avatar url={post.author.avatar} navigate={navigate} />
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

            <Pressable onPress={showModal} style={styles.topPart.moreicon}>
              <FeatherIcon name="more-horizontal" size={20} color="black" />
            </Pressable>
          </Pressable>
        )}
        {/* content part */}
        <View style={styles.contentPart}>
          {
            <Pressable
              onPress={changeState}
              style={styles.contentPart.textPart}
            >
              <TextComponent numLine={numOfLine} content={described} />
              {!(type == 'single') && showhideButton && (
                <Text onPress={changeState}>Show/hide</Text>
              )}
            </Pressable>
          }
          {!video && images && (
            <Pressable onPress={onPressImg}>
              <ImagesComponent type={type} image={images} />
            </Pressable>
          )}
          {video && !images && <VideoComponent video={video} />}
        </View>
        {/* bottom part */}
        <View
          style={[
            styles.bottomPart,
            { flexDirection: type == 'single' ? 'column-reverse' : 'column' },
          ]}
        >
          <View style={styles.bottomPart.part1}>
            <View style={{ flex: 1 }}>
              {numLikes > 0 && (
                <Text>
                  <AntDesignIcon name="like2" size={20} color="blue" />
                  {post.is_liked == '1'
                    ? numLikes - 1 > 0
                      ? ' Bạn và ' + (numLikes - 1) + ' người khác'
                      : ' Bạn'
                    : numLikes}
                </Text>
              )}
            </View>
            {!(type == 'single') && numCmt > 0 && (
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text>{numCmt} bình luận</Text>
              </View>
            )}
          </View>

          <View style={styles.bottomPart.part2}>
            <Pressable
              style={styles.bottomPart.likeNcommentButton}
              onPress={onPressLike}
            >
              <AntDesignIcon
                name={iconLikeName}
                size={15}
                color={iconLikeColor}
              />
              <Text style={{ textAlign: 'right', color: iconLikeColor }}>
                {' '}
                Thích
              </Text>
            </Pressable>
            {post.can_comment == '1' && (
              <Pressable
                style={styles.bottomPart.likeNcommentButton}
                onPress={onPressComment}
              >
                <Octicons name="comment" size={15} color="black" />
                <Text> Bình luận</Text>
              </Pressable>
            )}
          </View>
        </View>
        {/* list comments part */}
        {type == 'single' && (
          <CommentsComponent
            postId={post.id}
            inputComment={inputComment}
            navigate={navigate}
          />
        )}
      </View>
    )
  )
}
