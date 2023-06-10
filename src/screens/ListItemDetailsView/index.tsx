import React from 'react';

import {Text} from '~/components/UIElements/Text';
import type {ScreenProps} from '~/routes/ListStack';
import {ListItem, List} from '~/components/shared';
import {ViewWrapper} from '~/components/Layout/ViewWrapper';
import {DeleteItemBtn} from '~/components/ListItemDetailsScreen';
import {useAppSelector} from '~/hooks/reduxHooks';
import {selectListItem} from '~/store/selectors/listSelectors';
import {useListItemPress} from '~/hooks/useListItemPress';
import {ListItemType} from '~/models/ListItem';

export const ListItemDetails = ({route}: ScreenProps<'ListItemDetails'>) => {
  const listItem = useAppSelector(state =>
    selectListItem(state, route.params.key),
  );
  const {onListItemPress} = useListItemPress();

  if (!listItem) return <></>;

  return (
    <ViewWrapper>
      <DeleteItemBtn ItemId={listItem.key} />
      <Text>{listItem.description}</Text>
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
