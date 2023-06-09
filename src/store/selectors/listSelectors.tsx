import {ListItemType} from '~/models/ListItem';
import {RootState} from '../';
import {createSelector} from 'reselect';
import {shallowEqual} from 'react-redux';
import {filterItems, getItemByKey} from '~/utils/helperFunctions';

export const listSelectors = (state: RootState) => state.list.data;
export const searchStringSelector = (state: RootState) =>
  state.list.searchStrig;

export const selectListItem = createSelector(
  [listSelectors, (_, id: string) => id],
  (state, id) => getItemByKey<ListItemType>(state, 'key', id, () => {}),
  {
    memoizeOptions: {
      equalityCheck: (a, b) => a === b,
      maxSize: 10,
      resultEqualityCheck: shallowEqual,
    },
  },
);

export const filterListItems = createSelector(
  [listSelectors, searchStringSelector],
  (state, searchString) =>
    filterItems<ListItemType>(state, searchString.toLowerCase(), [
      'title',
      'displayName',
      'description',
      'list',
    ]),
  {
    memoizeOptions: {
      equalityCheck: (a, b) => a === b,
      maxSize: 10,
      resultEqualityCheck: shallowEqual,
    },
  },
);
