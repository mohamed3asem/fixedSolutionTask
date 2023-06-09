import {applyMiddleware, createStore, Store} from 'redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';

import rootReducer from './reducers';
import {ListActions} from './types/ListTypes';

// 1. Get the root state's type from reducers
export type RootState = ReturnType<typeof rootReducer>;
// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, ListActions>;

// 3. Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootState, ListActions>, 'dispatch'> & {
  dispatch: AppThunkDispatch;
};

//4. create the store with your custom AppStore
export const store: AppStore = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);
