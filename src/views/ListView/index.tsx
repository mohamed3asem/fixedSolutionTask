import React from 'react';

import {List} from '~/components/List';
import {ListItem} from '~/components/ListItem';
import {ListItemType} from '~/models/ListItem';
import {ViewWrapper} from '~/components/Layout/ViewWrapper';
import {SearchInput} from '~/components/SearchInput';
import {useFetchList} from '~/hooks/useFetchList';
import {ShuffleBtn} from '~/components/ShuffleBtn';
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
