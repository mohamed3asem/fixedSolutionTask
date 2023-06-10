import React from 'react';
import {
  GestureResponderEvent,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';

import type {ListItemType} from '~/models/ListItem';
import {ErrorBoundaries} from '~/components/shared/ErrorBoundaries';
import {Text} from '~/components/UIElements/Text';
import {styles} from './ListItem.styles';

export type ListItemProp<T = ListItemType> = ListRenderItemInfo<T> & {
  onClick: ((event: GestureResponderEvent) => void) | undefined;
};

export const ListItem = <T extends ListItemType = ListItemType>({
  item,
  onClick,
}: ListItemProp<T>) => {
  return (
    <ErrorBoundaries>
      <TouchableOpacity style={styles.container} onPress={onClick}>
        <Text>{item.title}</Text>
        <Text>{item.displayName}</Text>
        <Text>{item.description}</Text>
      </TouchableOpacity>
    </ErrorBoundaries>
  );
};
