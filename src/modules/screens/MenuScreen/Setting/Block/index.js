import { Link } from '@react-navigation/native'
import ScreenNames from 'general/constants/ScreenNames'
import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { localIPAddress } from 'general/constants/Global'
import { getPreference } from 'libs/storage/PreferenceStorage'
import styles from './styles'

export default function Block( { navigation }) {
  const [listBlock, setListBlock] = useState();

  const [userUnBlock, setUserUnBlock] = useState();
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    async function fetchData() {
    try {
      const userId = await getPreference('UserId');
      const token = await getPreference('UserToken');

        const response = await fetch(
            localIPAddress +
            `friend/get_list_blocks?id=${encodeURIComponent(userId)}`,
            {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: token,
              index: "0",
              count: "8"
            }),
            },
        )

        const data = await response.json()
        if (data) {
            setListBlock(data.data);
        }
        } catch (error) {
        console.log(error)
        }
    }
    fetchData();
  }, [])
  const handleUnBlock = async (user) => {
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
          userId: user.id,
          token: token,
          type: 1
        }),
      })
      const json = await response.json()
      return json.movies
    } catch (error) {
      console.error(error)
    }
  }
  const handleModal = (user) => {
    setUserUnBlock(user)
    setVisible(true)
  }
  const ModalPopup = ({ visibile, user , setVisible, handleUnBlock}) => {
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
              Bỏ chặn {user.name} ?
            </Text>
          </View>
          <Text style={styles.modalContent}>
            Nếu bạn bỏ chặn {user.name}, họ có thể xem Dòng thời gian của bạn 
            hoặc liên hệ với bạn, tùy thuộc vào cài đặt của bạn.
          </Text>
          <Text style={styles.modalContent}>
            Có thể khôi phục các thẻ mà bạn và {user.name} đã thêm cho nhau trước
            đó
          </Text>
          <Text style={styles.modalContent}>
            Bạn phải đợi 48 giờ nếu muốn chặn lại {user.name}
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
                handleUnBlock(user);
                setVisible(false)
              }}
            >
              <Text style={styles.textButtonModalBlock}>BỎ CHẶN</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        </View>
        }
      </Modal>
    )
  }
  const ItemBlock = (user) => (
    
    <TouchableOpacity style={styles.itemBlock} onPress={() => {handleModal(user.user)}}>
      <Text style={styles.nameItem}>{user.user.name}</Text>
      <Text style={styles.textBlock}>BỎ CHẶN</Text>
    </TouchableOpacity>
  )


  return (
    <View style={styles.wrapper}>
      <ModalPopup
        visibile={visible}
        setVisible={setVisible}
        user = {userUnBlock}
        handleUnBlock= {handleUnBlock}
      >
        <View styles={{ alignItems: 'center' }}></View>
      </ModalPopup>
      <Text style={styles.textLabel}>Người bị chặn</Text>
      <Text style={styles.textNote}>Một khi bạn đã chặn ai đó, họ sẽ không xem được nội dung bạn tự đăng trên dòng thời 
        gian mình, gắn thẻ bạn, mời bạn tham gia sự kiện hoặc nhóm, bắt đầu cuộc trò chuyện với bạn 
        hay thêm bạn làm bạn bè. Điều này không bao gồm các ứng dụng, trò chơi hay nhóm mà cả bạn và người
        này đều tham gia.
      </Text>
      <Link to={{screen: ScreenNames.addBlock}}>
        <View style={styles.linkAddBlock}>
          <Icon
          name='plus-square'
          style={styles.iconPlus}
          />
          <Text style={styles.textAddBlock}>THÊM VÀO DANH SÁCH CHẶN</Text>
        </View>
      </Link>
      {listBlock ? 
      listBlock.map((user, index) => (
        <ItemBlock user={user} />
      ))
      :
      <Text>

      </Text>
      }
      

    </View>
  )
}
