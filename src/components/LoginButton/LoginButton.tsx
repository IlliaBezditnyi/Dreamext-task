import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {LoginButtonProps} from '../../types';

const LoginButton: FC<LoginButtonProps> = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b71f3',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginButton;
