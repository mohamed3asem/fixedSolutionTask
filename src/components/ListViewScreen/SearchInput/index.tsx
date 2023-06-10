import React, {useState} from 'react';
import {Button, SafeAreaView, TextInput} from 'react-native';
import {useAppDispatch} from '~/hooks/reduxHooks';
import {searchList} from '~/store/actions/listActions';
import {styles} from './SearchInput.styles';
// NOTE: it is better for this component to accept onPress function to be reusable
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
