import {ListItemType} from '~/models/ListItem';

export const DELETE_ITEM = 'DELETE_ITEM';
export const FETCH_LIST = 'FETCH_LIST';
export const SHUFFLE_LIST = 'SHUFFLE_LIST';
export const SEARCH_LIST = 'SEARCH_LIST';

export type FETCH_LIST_ACTION = {
  type: typeof FETCH_LIST;
  payload: ListItemType[];
};
export type DELETE_ITEM_ACTION = {
  type: typeof DELETE_ITEM;
  payload: ListItemType['title'];
};

export type SHUFFLE_LIST_ACTION = {
  type: typeof SHUFFLE_LIST;
};

export type SEARCH_LIST_ACTION = {
  type: typeof SEARCH_LIST;
  payload: string;
};

export type ListActions =
  | FETCH_LIST_ACTION
  | DELETE_ITEM_ACTION
  | SHUFFLE_LIST_ACTION
  | SEARCH_LIST_ACTION;
