import React from 'react';
import { clearAllCaches, mergeCacheStorage, getAllCaches } from './redux-cache';
import isServer from '../utils/isServer';

function getOrCreateCacheStorage (initialCacheStorage) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
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
      if (isServer) {
        clearAllCaches();
      }

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialCacheStorage: getAllCaches(),
      }
    }

    constructor (props) {
      super(props);
      this.cacheStorage = getOrCreateCacheStorage(props.initialCacheStorage);
    }

    render () {
      return <App {...this.props} cacheStorage={this.cacheStorage} />
    }
  }
}
