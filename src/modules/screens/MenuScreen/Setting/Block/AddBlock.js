import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { localIPAddress, PreferenceKeys } from 'general/constants/Global'
import { getPreference, setPreference } from 'libs/storage/PreferenceStorage'

import styles from './styles'

export default function AddBlock( { navigation }) {
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);

    const [userBlock, setUserBlock] = useState();
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      async function fetchData() {
      try {
          const response = await fetch(
              localIPAddress +
              `search/search_user`,
              {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                searchValue: searchValue
              }),
              },
          )

          const data = await response.json()
          if (data) {
              setResultSearch(data.data);
          }
          } catch (error) {
          console.log(error)
          }
      }
      fetchData();
  }, [searchValue])

  const handleModal = (user) => {
    setUserBlock(user)
    setVisible(true)
  }
  const handleBlock = async (user) => {
    try {
      const userId = await getPreference('UserId');
      const token = await getPreference('UserToken');
      const api = localIPAddress + `friend/set_block?id=${encodeURIComponent(userId)}`

      const response = await fetch(api, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user._id,
          token: token,
          type: 0
        }),
      })
      const json = await response.json()
      console.log(json);
      return json.movies
    } catch (error) {
      console.error(error)
    }
  }
  const SearchItem = (data) => (
    <TouchableOpacity style={styles.itemResultSearch} onPress={() => handleModal(data.user)}>
      <Text style={styles.nameItem}>{data.user.name}</Text>
      <Text style={styles.textBlock}>CHẶN</Text>
    </TouchableOpacity>
  )

  const ModalPopup = ({ visibile, user , setVisible, handleBlock}) => {
    const toggleModal = () => {
      if (visibile) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
  
    useEffect(() => {
      toggleModal()
    }, [visibile])
  
    return (
      <Modal transparent visible={visibile}>
        {user && 
        <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>
          <View style={styles.modalTitleWrap}>
            <Text style={styles.modalTitle}>
              Chặn {user.name} ?
            </Text>
          </View>
          <View style={styles.modalContentWrap}>
            <Text style={styles.modalContent}>
              {user.firstName} sẽ không thể:
            </Text>
            <FlatList
              data={[
                {key: '- Xem bài viết của bạn'},
                {key: '- Gắn thẻ bạn'},
                {key: '- Mời bạn tham gia sự kiện hoặc nhóm'},
                {key: '- Nhắn tin cho bạn'},
                {key: '- Thêm bạn làm bạn bè'},
              ]}
              renderItem={({item}) => <Text style={styles.modalContent}>{item.key}</Text>}
            />
          </View>
          <Text style={styles.modalContent}>Nếu các bạn là bạn bè, việc chặn {user.firstName} cũng sẽ
          hủy kết bạn với anh ấy.
          </Text>
          <Text style={styles.modalContent}>Nếu chỉ muốn giới hạn nội dung mình chia sẻ với {user.firstName} hoặc ẩn bớt nội dung về anh ấy trên Facebook, bạn có thể 
          giảm tương tác với anh ấy.
          </Text>
          <View style={styles.groupButtonModal}>
            <TouchableOpacity
              style={styles.buttonModalExit}
              onPress={() => {
                setVisible(false)
              }}
            >
              <Text style={styles.textButtonModalExit}>HỦY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonModalBlock}
              onPress={() => {
                handleBlock(user);
                setVisible(false)
              }}
            >
              <Text style={styles.textButtonModalBlock}>CHẶN</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        </View>
        }
      </Modal>
    )
  }

  return (
    <View style={styles.wrapperAddBlock}>
      <View style={styles.header}>
        <Icon
        name='arrow-left'
        style={styles.iconBack}
        onPress = { () => navigation.goBack()}
        />
        <View style={styles.inputSearch}>
          <TextInput
          style={styles.input}
          placeholder = "Nhập tên hoặc email"
          autoFocus={true}
          onChangeText={(value) => setSearchValue(value)}
          value={searchValue}
          />
          <Ionicons
          name='close'
          style={searchValue ? styles.iconClear : {display: 'none'}}
          onPress={() => setSearchValue('')}
          />
        </View>
      </View>
      <ModalPopup
        visibile={visible}
        setVisible={setVisible}
        user = {userBlock}
        handleBlock= {handleBlock}
      >
        <View styles={{ alignItems: 'center' }}></View>
      </ModalPopup>
      {resultSearch &&
        <Text style={styles.textNoteResult}>Danh sách bên dưới hiển thị kết quả cho những người có trang
           cá nhân bao gồm các từ tương tự "{searchValue}". Những người này có thể không phải bạn bè hoặc 
           người theo dõi bạn.
        </Text>
      }
      { resultSearch && resultSearch.map((user, index) => (       
          <SearchItem user={user} key={index} />
      ))}
    </View>
  )
}
