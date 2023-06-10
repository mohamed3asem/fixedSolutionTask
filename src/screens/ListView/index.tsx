import React from 'react';

import {List, ListItem} from '~/components/shared';
import {ListItemType} from '~/models/ListItem';
import {ViewWrapper} from '~/components/Layout/ViewWrapper';
import {SearchInput, ShuffleBtn} from '~/components/ListViewScreen';
import {useFetchList} from '~/hooks/useFetchList';
import {useListItemPress} from '~/hooks/useListItemPress';

export const ListView = () => {
  const data = useFetchList();

  const {onListItemPress} = useListItemPress();

  return (
    <ViewWrapper>
      <SearchInput />
      <ShuffleBtn />
      <List<ListItemType>
        data={data}
        keyExtractor={item => item.key}
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
