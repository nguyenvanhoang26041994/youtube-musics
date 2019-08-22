const defaultState = {
  version: '1.0.0',
  mobile: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_APP_VERSION':
      return {
        ...state,
        version: action.payload,
      };

    case 'DESKTOP_OR_MOBILE':
      return {
        ...state,
        mobile: action.payload,
      };
  
    default:
      return state;
  }
};
