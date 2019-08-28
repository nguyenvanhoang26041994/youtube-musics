var isServer = require('../utils/isServer');

var constants = Object.freeze({
  CACHE_KEY: '/redux-cache/CACHE_KEY',
  SET: '/redux-cache/SET',
});
var cacheKey = constants.CACHE_KEY;
var cacheStorage = {};

if (!isServer) {
  window.cacheStorage = cacheStorage;
}

module.exports = function(store) {
  return function(next) {
    return function(action) {
      if (action[cacheKey]) {
        next(action);
        cacheStorage[action[cacheKey]] = action;
        // store.dispatch({ type: constants.SET, key: action[cacheKey], value: action });
      }
    
      return next(action);
    }
  }
}

function setCacheStorage(key, value) {
  cacheStorage[key] = value;
}

function getCacheStorage(key) {
  return cacheStorage[key];
}
module.exports.cacheKey = cacheKey;
module.exports.cacheStorage = cacheStorage;
module.exports.setCacheStorage = setCacheStorage;
module.exports.getCacheStorage = getCacheStorage;

module.exports.mergeCacheStorage = function(otherCacheStorage) {
  Object
    .keys(otherCacheStorage)
    .map(key => {
      setCacheStorage(key, otherCacheStorage[key]);
    });
  return cacheStorage;
}

module.exports.clearAllCaches = function() {
  cacheStorage = {};
  return cacheStorage;
}

module.exports.getAllCaches = function() {
  return cacheStorage;
}
