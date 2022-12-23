import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {CommentCardProps} from '../../types';

const CommentsCard: FC<CommentCardProps> = ({comments}) => {
  const {body} = comments;

  return (
    <View style={styles.conainer}>
      <Text style={styles.text}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conainer: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  text: {
    fontSize: 20,
  },
});

export default CommentsCard;
