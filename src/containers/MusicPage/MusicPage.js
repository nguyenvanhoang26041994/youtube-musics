import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as actionCreators from './actions';

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
  const callApi = store.dispatch(actionCreators.getMusic(query.id));

  // in client-side await will be stop render
  if (isSever) {
    await callApi;
  }

  return {};
};

export default MusicPageEnhancer;
