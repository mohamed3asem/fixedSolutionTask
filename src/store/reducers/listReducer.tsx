import {
  ListActions,
  DELETE_ITEM,
  SEARCH_LIST,
  SHUFFLE_LIST,
  FETCH_LIST,
} from '../types/ListTypes';
import {ListItemType} from '~/models/ListItem';
import {cloneDeep, shuffle} from 'lodash';
import {removeItemByKey} from '~/utils/helperFunctions';

type State = {
  data: ListItemType[];
  searchStrig: string;
};

const defaultState: State = {
  data: [],
  searchStrig: '',
};

export const ListReducer = (
  state: State = defaultState,
  action: ListActions,
): State => {
  switch (action.type) {
    case FETCH_LIST: {
      return {...state, data: action.payload};
    }
    case DELETE_ITEM: {
      const newList = cloneDeep(state.data);
      //NOTE: this function has a side effect as it changes the data in place not returning a new data.I think it is better for memory
      removeItemByKey<ListItemType>({
        list: newList,
        key: 'key',
        value: action.payload,
        childrenKey: 'list',
      });
      return {...state, data: newList};
    }
    case SHUFFLE_LIST: {
      const newList = shuffle(cloneDeep(state.data));
      return {...state, data: newList};
    }
    case SEARCH_LIST: {
      return {...state, searchStrig: action.payload};
    }
    default:
      return state;
  }
};
