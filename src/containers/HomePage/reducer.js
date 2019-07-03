const defaultState = {
  pageID: 'home-page',
  userName: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
