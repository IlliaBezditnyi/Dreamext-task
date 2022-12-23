import {View, TextInput, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {CustomInputProps} from '../../types';

const CustomInput: FC<CustomInputProps> = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={styles.error}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    alignSelf: 'stretch',
  },
});

export default CustomInput;
