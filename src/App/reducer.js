const defaultState = {
  version: '1.0.0',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_APP_VERSION':
      return {
        ...state,
        version: action.payload,
      };
  
    default:
      return state;
  }
};
