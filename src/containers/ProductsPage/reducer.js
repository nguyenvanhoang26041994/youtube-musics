const defaultState = {
  say: 'Nothing',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'HELLO':
      return {
        ...state,
        say: 'Hello',
      };
    default:
      return state;
  }
}
