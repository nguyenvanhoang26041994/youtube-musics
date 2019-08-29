import React from 'react';
import { clearAllCaches, mergeCacheStorage, getAllCaches } from './redux-cache';
import isServer from '../utils/isServer';

function getOrCreateCacheStorage(initialCacheStorage) {
  // Always make a new cache if server, otherwise cache is shared between requests
  if (isServer) {
    clearAllCaches();
    return {};
  }

  if (!window['_CACHE_STORAGE_']) {
    window['_CACHE_STORAGE_'] = mergeCacheStorage(initialCacheStorage);;
  }

  return window['_CACHE_STORAGE_'];
}

export default App => {
  return class AppWithCache extends React.Component {
    static async getInitialProps (appContext) {
      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialCacheStorage: getOrCreateCacheStorage(getAllCaches()),
      }
    }

    constructor (props) {
      super(props);
    }

    render () {
      return <App {...this.props} />
    }
  }
}
