import {View, TextInput, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface InputProps {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
}

const Input: FC<InputProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {},
});

export default Input;
