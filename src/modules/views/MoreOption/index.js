import { useState } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import OptionComponent from './optionComponent';
import MinusIcon from 'react-native-vector-icons/AntDesign';

export default MoreOption = ({ visible, setvisible, isposter }) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.darkArea}
            onPress={() => setvisible(false)}
          />
          <View style={styles.whiteArea}>
            <View style={styles.blackIconBox}>
              <MinusIcon name="minus" size={45} style={{ margin: -20 }} />
            </View>
            <ScrollView style={styles.optionsArea}>
              <OptionComponent optionName={'option 1'} />
              <OptionComponent optionName={'option 2'} />
              <OptionComponent optionName={'option 3'} />
              <OptionComponent optionName={'option 4'} />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  darkArea: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  whiteArea: {
    backgroundColor: '#e6e6e6',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  blackIconBox: {
    alignItems: 'center',
    marginTop: 10,
  },
  optionsArea: {
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
  },
});
