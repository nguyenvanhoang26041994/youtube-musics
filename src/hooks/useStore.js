import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const state = useSelector(s => s);

  return {
    dispatch,
    getState: () => state,
  }
};
