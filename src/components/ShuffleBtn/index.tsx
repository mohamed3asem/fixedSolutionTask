import React from 'react';
import {Button} from 'react-native';
import {debounce} from 'lodash';

// import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '~/hooks/reduxHooks';
import {shuffleList} from '~/store/actions/listActions';

export const ShuffleBtn = () => {
  const dispatch = useAppDispatch();
  const onShuffle = () => {
    dispatch(shuffleList());
  };

  return (
    <Button
      onPress={debounce(onShuffle, 600, {leading: true, trailing: false})}
      title="Shuffle"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};
