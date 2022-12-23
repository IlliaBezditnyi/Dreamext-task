import {FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';
import axios, {AxiosResponse} from 'axios';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';
import {Post} from '../../types';

const HomeScreen: FC = () => {
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onLogOutPressed = () => {
    navigate('Login');
  };

  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: 10,
        },
      })
      .then((response: AxiosResponse) => {
        setIsLoading(false);
        setData(response.data);
      });
  }, []);

  console.log(data);

  return (
    <>
      <Header title="Posts" onPress={onLogOutPressed} />
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#b9bfc7"
          style={styles.activityIndicator}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <PostCard data={item} />}
          keyExtractor={item => item.id.toString()}
        />
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
});

export default HomeScreen;
