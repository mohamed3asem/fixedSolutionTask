import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {useAppDispatch} from '~/hooks/reduxHooks';
import {searchList} from '~/store/actions/listActions';

export const SearchInput = () => {
  const [text, onChangeText] = useState('');
  const dispatch = useAppDispatch();

  const search = () => {
    dispatch(searchList(text));
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Search" onPress={search} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
