import React from 'react';
import {
  GestureResponderEvent,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import type {ListItemType} from '~/models/ListItem';
import {ErrorBoundaries} from '~/components/ErrorBoundaries';
import {Text} from '~/components/Text';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
