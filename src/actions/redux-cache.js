import { cache as cacheConstant, clean as cleanConstant } from '../constants/redux-cache';

export const cache = (key, data) => ({
  type: cacheConstant,
  payload: {
    key,
    data,
  },
});

export const clean = key => ({
  type: cleanConstant,
  payload: key,
});
