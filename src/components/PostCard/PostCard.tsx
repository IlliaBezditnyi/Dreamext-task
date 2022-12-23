import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {FC, useState} from 'react';
import titleLogo from '../../../assets/images/title-icon.png';
import descIcon from '../../../assets/images/description-icon.png';
import ModalWindow from '../ModalWindow';
import {PostCardProps} from '../../types';

const PostCard: FC<PostCardProps> = ({data}) => {
  const {id, title, body} = data;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log(id);
          setOpenModal(true);
        }}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Image
              source={titleLogo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.wrapper}>
            <Image source={descIcon} style={styles.logo} resizeMode="contain" />
            <Text style={styles.description}>{body}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal transparent={true} animationType="fade" visible={openModal}>
        <TouchableOpacity
          style={styles.modal}
          onPress={() => setOpenModal(false)}
          activeOpacity={1}>
          <ModalWindow
            id={id}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9bfc7',
    paddingLeft: 10,
    marginTop: 30,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    paddingLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'stretch',
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    paddingLeft: 10,
    flex: 1,
    fontSize: 18,
  },
  logo: {
    width: 40,
    height: 40,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PostCard;
