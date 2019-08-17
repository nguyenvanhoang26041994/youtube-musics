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

  ownerMusics: [],
  isOwnerMusicsFetching: false,
  isOwnerMusicsError: false,
  isOwnerMusicsSuccess: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    // PROFILE
    case profilePage.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          id: action.payload.id,
          name: action.payload.name,
          displayRole: action.payload.displayRole,
          isVerified: action.payload.isVerified,
          qoute: action.payload.qoute || {},
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
        profile: defaultState.profile,
        isProfileFetching: false,
        isProfileError: true,
        isProfileSuccess: false,
      };

    // OWNER
    case profilePage.GET_OWNER_MUSICS_SUCCESS:
      return {
        ...state,
        ownerMusics: action.payload,
        isOwnerMusicsFetching: false,
        isOwnerMusicsError: false,
        isOwnerMusicsSuccess: true,
      };

    case profilePage.GET_OWNER_MUSICS_REQUEST:
      return {
        ...state,
        isOwnerMusicsFetching: true,
      };

    case profilePage.GET_OWNER_MUSICS_FAILURE:
      return {
        ...state,
        ownerMusics: defaultState.ownerMusics,
        isOwnerMusicsFetching: false,
        isOwnerMusicsError: true,
        isOwnerMusicsSuccess: false,
      };
    default:
      return state;
  }
};
