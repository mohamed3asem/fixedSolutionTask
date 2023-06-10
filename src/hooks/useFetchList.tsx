import {useEffect, useDeferredValue} from 'react';

import {fetchList} from '~/store/actions/listActions';
import {useAppDispatch, useAppSelector} from '~/hooks/reduxHooks';
import {filterListItems} from '~/store/selectors/listSelectors';

export const useFetchList = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(filterListItems);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return useDeferredValue(data);
};
