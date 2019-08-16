import { profilePageActions } from './constants';

const defaultState = {
  profile: {
    id: '',
    name: '',
    displayRole: '',
    isVerified: true,
    qoute: {
      text: '',
      author: '',
    },
  },
  isProfileFetching: false,
  isProfileError: false,
  isProfileSuccess: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case profilePageActions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          id: action.playload.id,
          name: action.playload.name,
          displayRole: action.playload.displayRole,
          isVerified: action.playload.isVerified,
          qoute: action.playload.qoute,
        },
        isProfileFetching: false,
        isProfileError: false,
        isProfileSuccess: true,
      };

    case profilePageActions.GET_PROFILE_REQUEST:
      return {
        ...state,
        isProfileFetching: true,
      };

    case profilePageActions.GET_PROFILE_FAILURE:
      return {
        ...state,
        isProfileFetching: false,
        isProfileError: true,
        isProfileSuccess: false,
      };
    default:
      return state;
  }
};
