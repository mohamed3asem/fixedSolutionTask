import fetchedData from '~/assets/mockData.json';
import {ListItemType} from '~/models/ListItem';
import {AppThunkDispatch} from '~/store/';
import {addUUID} from '~/utils/helperFunctions';
import {
  DELETE_ITEM,
  FETCH_LIST,
  SHUFFLE_LIST,
  SEARCH_LIST,
} from '../types/ListTypes';

export const fetchList = () => async (dispatch: AppThunkDispatch) => {
  try {
    const data = await Promise.resolve(fetchedData as ListItemType[]);
    //NOTE this function has a side effect as it changes the data in place not returning a new data.I think it is better for memory
    addUUID<ListItemType>(data, 'list');
    return dispatch({
      type: FETCH_LIST,
      payload: data,
    });
  } catch (e) {
    return dispatch({
      type: FETCH_LIST,
      payload: [],
    });
  }
};

export const deleteItem =
  (key: ListItemType['title']) => (dispatch: AppThunkDispatch) =>
    dispatch({type: DELETE_ITEM, payload: key});

export const shuffleList = () => (dispatch: AppThunkDispatch) =>
  dispatch({type: SHUFFLE_LIST});

export const searchList =
  (searchString: string) => (dispatch: AppThunkDispatch) =>
    dispatch({type: SEARCH_LIST, payload: searchString});
