import { cache, clean } from '../constants/redux-cache';
const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case cache:
      return {
        ...state,
        [action.payload.key]: action.payload.data,
      };
    case clean: {
      const mirrorState = { ...state };
      delete mirrorState[action.payload];

      return mirrorState;
    };

    default:
      return state;
  }
}
