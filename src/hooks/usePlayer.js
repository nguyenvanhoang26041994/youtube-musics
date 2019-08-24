import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../actions/player';

let shouldSkip = false;
let actions = {};

export default () => {
  if (shouldSkip) {
    return actions;
  }

  actions = bindActionCreators(playerActions, useDispatch());
  shouldSkip = true;

  return actions;
};
