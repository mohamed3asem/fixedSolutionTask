import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text} from 'react-native';

import {List} from '~/components/List';
import type {RootStackPatamList, PageProps} from '~/routes/ListStack';
import {ListItem} from '~/components/ListItem';
import {ViewWrapper} from '~/components/Layout/ViewWrapper';
import {DeleteItemBtn} from '~/components/DeleteItemBtn';
import {useAppSelector} from '~/hooks/reduxHooks';
import {selectListItem} from '~/store/selectors/listSelectors';
import {useListItemPress} from '~/hooks/useListItemPress';
import {ListItemType} from '~/models/ListItem';

export type ListItemDetailsScreenNavigationProp = StackNavigationProp<
  RootStackPatamList,
  'ListItemDetails'
>;

export const ListItemDetails = ({route}: PageProps<'ListItemDetails'>) => {
  const listItem = useAppSelector(state =>
    selectListItem(state, route.params.key),
  );
  const {onListItemPress} = useListItemPress();

  if (!listItem) return <></>;

  return (
    <ViewWrapper>
      <DeleteItemBtn ItemId={listItem.key} />
      {listItem.description && <Text>{listItem.description}</Text>}
      <List<ListItemType>
        data={listItem.list}
        renderItem={item => (
          <ListItem
            {...item}
            onClick={event => onListItemPress(event, item.item)}
          />
        )}
      />
    </ViewWrapper>
  );
};
