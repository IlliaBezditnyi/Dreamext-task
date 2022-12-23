import React, {FC} from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import loginLogo from '../../../assets/images/login-logo.png';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {StackNavigationProp} from '@react-navigation/stack';
import CustomInput from '../../components/CustomInput';
import LoginButton from '../../components/LoginButton';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginScreen: FC = () => {
  const {height} = useWindowDimensions();

  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {control, handleSubmit, formState, resetField} = useForm({
    mode: 'onChange',
  });

  const onLogInPressed = (data: any) => {
    console.log(data);
    navigate('Home');
    resetField('email');
    resetField('password');
  };

  return (
    <View style={styles.root}>
      <Image
        source={loginLogo}
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode="contain"
      />

      <CustomInput
        name="email"
        placeholder="Email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {value: EMAIL_REGEX, message: 'Invalid email'},
        }}
      />

      <CustomInput
        name="password"
        placeholder="Password"
        control={control}
        secureTextEntry
        rules={{required: 'Password is required'}}
      />

      {formState.isDirty && formState.isValid ? (
        <LoginButton title="Login" onPress={handleSubmit(onLogInPressed)} />
      ) : null}
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
