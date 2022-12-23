import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import logoutIcon from '../../../assets/images/logout-logo.png';
import {HeaderProps} from '../../types';

const Header: FC<HeaderProps> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.text}>Log Out</Text>
        <Image source={logoutIcon} style={styles.logo} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#717e8e',
    paddingHorizontal: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    height: 80,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingRight: 10,
  },
  logo: {
    width: 20,
    height: 20,
  },
});

export default Header;
