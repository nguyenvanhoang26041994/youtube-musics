import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import playingListSelector from '../selectors/playingListSelector';
import * as playingListActions from '../actions/playing-list';

export default () => {
  return [
    useSelector(playingListSelector),
    bindActionCreators(playingListActions, useDispatch())
  ];
};
