import {Text, StyleSheet, Pressable} from 'react-native';
import React, {FC} from 'react';

interface ButtonProps {
  onPress: (event: any) => void;
}

const LoginButton: FC<ButtonProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Log in</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b71f3',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginButton;
