import { profilePage } from './constants';

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
    avatarImg: '',
    coverImg: '',
  },
  isProfileFetching: false,
  isProfileError: false,
  isProfileSuccess: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case profilePage.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          id: action.payload.id,
          name: action.payload.name,
          displayRole: action.payload.displayRole,
          isVerified: action.payload.isVerified,
          qoute: action.payload.qoute,
          avatarImg: action.payload.avatarImg,
          coverImg: action.payload.coverImg,
        },
        isProfileFetching: false,
        isProfileError: false,
        isProfileSuccess: true,
      };

    case profilePage.GET_PROFILE_REQUEST:
      return {
        ...state,
        isProfileFetching: true,
      };

    case profilePage.GET_PROFILE_FAILURE:
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
