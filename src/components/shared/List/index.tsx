import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {ListItemType} from '~/models/ListItem';

type ListCompatibleModel = ListItemType;
type ContentListProps<T> = Pick<
  FlatListProps<T>,
  'data' | 'renderItem' | 'keyExtractor'
>;

export const List = <T extends ListCompatibleModel>({
  data,
  renderItem,
  keyExtractor,
}: ContentListProps<T>) => {
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};
