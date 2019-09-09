import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import Playlist from '../../containers/Playlist';
import withLayout from '../../HOC/withLayout';
import withSPA from '../../HOC/withSPA';
import * as actionCreators from './actions';
import playlistFormater from '../../selectors/utils/playlistFormater';

const PlaylistPageWrapper = styled.div`
  &.playlist-page {
    .playlist-page__ranking {
      background-color: #414345;
    }
  }
`;

const PlaylistPage = ({ playlist, className }) => {
  return (
    <PlaylistPageWrapper className={cn('playlist-page container-custom container mx-auto flex flex-col relative flex-1 animated fadeIn', className)}>
      <Playlist
        className="bg-transparent mx-auto w-full flex-1"
        {...playlist}
      />
    </PlaylistPageWrapper>
  );
};

const mapStateToProps = state => ({
  playlist: playlistFormater(state.playlistPageReducer.playlist),
});

const PlaylistPageEnhancer = compose(
  connect(mapStateToProps),
  withLayout,
)(PlaylistPage);

PlaylistPageEnhancer.displayName= 'PlaylistPageEnhancer';

PlaylistPageEnhancer.getInitialProps = async ({ query, reduxStore: store, isServer }) => {
  const callApi = store.dispatch(actionCreators.getPlaylist(query.id));
  // in client-side await will be stop render
  if (isServer) {
    await callApi;
  }

  return {};
}

export default withSPA(PlaylistPageEnhancer);
