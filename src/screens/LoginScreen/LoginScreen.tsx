import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Input from '../../components/Input';
import LoginButton from '../../components/LoginButton';
import logo from '../../../assets/images/login-logo.png';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const {height} = useWindowDimensions();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLogInPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.root}>
      <Image
        source={logo}
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode="contain"
      />

      <Input
        placeholder="Email"
        value={email}
        setValue={setEmail}
        secureTextEntry={false}
      />

      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      {email && password ? <LoginButton onPress={onLogInPressed} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: '30%',
    padding: 30,
  },
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 300,
  },
});

export default LoginScreen;
