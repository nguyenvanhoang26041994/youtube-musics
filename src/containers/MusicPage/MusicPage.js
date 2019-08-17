import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as actionCreators from './actions';
import { cache } from '../../actions/redux-cache';

const MusicPageWrapper = styled.div``;

const MusicPage = ({ className }) => {
  return (
    <MusicPageWrapper className={cn('music-page', className)}></MusicPageWrapper>
  );
}

const MusicPageEnhancer = MusicPage;
MusicPage.displayName = 'MusicPage';
MusicPageEnhancer.displayName = 'MusicPageEnhancer';

MusicPageEnhancer.getInitialProps = async ({ query, reduxStore: store, isSever }) => {
  // cache data to redux
  const cacheMusic = music => store.dispatch(cache(`cacheMusic(${query.id})`, music));

  // in client-side await will be stop render
  if (isSever) {
    await Promise.all([
      store.dispatch(actionCreators.getMusic(query.id, cacheMusic)),
    ]);
  } else {
    const reduxCache = store.getState().reduxCache;

    if (reduxCache[`cacheMusic(${query.id})`]) {
      store.dispatch(actionCreators.getMusicSuccess(reduxCache[`cacheMusic(${query.id})`]));
    } else {
      store.dispatch(actionCreators.getMusic(query.id, cacheMusic));
    }
  }

  return {};
};

export default MusicPageEnhancer;
