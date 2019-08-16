import { musicsAsObject } from '../data/musics';

const defaultState = {
  musics: [
    musicsAsObject['iQp1_GfDhwQ'],
    musicsAsObject['87gWaABqGYs'],
    musicsAsObject['j4zP5saRZqg'],
    musicsAsObject['fB8TyLTD7EE'],
    musicsAsObject['kXYiU_JCYtU'],
    musicsAsObject['SvRFNNbxuAk'],
    musicsAsObject['Tv6WImqSuxA'],
    musicsAsObject['iKzRIweSBLA'],
    musicsAsObject['S2oxFIsENgM'],
    musicsAsObject['yaJx0Gj_LCY'],
  ],
  isFetching: false,
  isFetched: false,
  isError: false,
  isSuccess: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        isError: 'SUCCESS',
      };
  
    default:
      return state;
  }
}
