import React from 'react';
import {Button} from 'react-native';
import {debounce} from 'lodash';

import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '~/hooks/reduxHooks';
import {deleteItem} from '~/store/actions/listActions';

type DeleteItemBtnProps = {
  ItemId: string;
};

export const DeleteItemBtn = ({ItemId}: DeleteItemBtnProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation();
  const onDelete = async () => {
    try {
      await dispatch(deleteItem(ItemId));
      navigate.goBack();
    } catch (e) {}
  };

  return (
    <Button
      onPress={debounce(onDelete, 300, {leading: true, trailing: false})}
      title="Delete"
      color="red"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};
