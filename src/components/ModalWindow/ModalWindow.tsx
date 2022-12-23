import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import closeIcon from '../../../assets/images/close-icon.png';
import CommentsCard from '../CommentsCard';
import {ModalProps, CommentsProps} from '../../types';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const ModalWindow: FC<ModalProps> = ({id, setOpenModal}) => {
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get<CommentsProps[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        {
          params: {
            _limit: 5,
          },
        },
      )
      .then((response: AxiosResponse) => {
        setIsLoading(false);
        setComments(response.data);
      });
  });

  console.log(comments);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#b9bfc7"
          style={styles.activityIndicator}
        />
      ) : (
        <View style={styles.comments}>
          <View style={styles.header}>
            <Text style={styles.title}>Comments</Text>
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                setOpenModal(false);
              }}>
              <Image
                source={closeIcon}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={comments}
            renderItem={({item}) => <CommentsCard comments={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  comments: {
    height: deviceHeight / 2.5,
    width: deviceWidth * 0.8,
    backgroundColor: '#ffffd4',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  close: {
    paddingLeft: 55,
    backgroundColor: 'transparent',
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default ModalWindow;
