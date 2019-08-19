var constants = Object.freeze({
  CACHE_KEY: '/redux-cache/CACHE_KEY',
  SET: '/redux-cache/SET',
});
var cacheKey = constants.CACHE_KEY;

module.exports = function(store) {
  return function(next) {
    return function(action) {
      if (action[cacheKey]) {
        next(action);
        store.dispatch({ type: constants.SET, key: action[cacheKey], value: action });
      }
    
      return next(action);
    }
  }
}

module.exports.cacheKey = cacheKey;

module.exports.reduxCacheReducer = function(state = {}, action) {
  switch (action.type) {
    case constants.SET:
      return {
        ...state,
        [action.key]: action.value,
      };
  
    default:
      return state;
  }
}

// module.exports.hasKey = function(store, key) {
//   var state = store.getState();
//   return state.reduxCacheReducer[key];
// }
