import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import fp from 'lodash/fp';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button, Icon, Divider, Panel } from '../../../components/core';
import SongCard from '../../../containers/SongCard';
import MusicWithLyric from '../../../components/MusicWithLyric';
import MusicWithLyricSkeleton from '../../../components/MusicWithLyric/Skeleton';
import musicFormater from '../../../selectors/utils/musicFormater';
import musicsFormater from '../../../selectors/utils/musicsFormater';
import * as actionCreators from '../actions';
import withPlayerActions from '../../../HOC/withPlayerActions';
import withPlayingMusic from '../../../HOC/withPlayingMusic';
import withLayout from '../../../HOC/withLayout';
import withSPA from '../../../HOC/withSPA';

const MusicPageWrapper = styled.div``;

const MusicPage = ({ className, music, playerActions, playingMusic, trendingSongs }) => {
  const isSetToPlayerAlready = playingMusic.id === music.id;
  const playMusic = () => {
    if (isSetToPlayerAlready) {
      return;
    }

    return playerActions.playMusicAndResetPlayingList(music)
  };

  return (
    <MusicPageWrapper className={cn('music-page container-custom container mx-auto flex flex-col animated fadeIn', className)}>
      <div className="flex w-full">
        <div className="w-8/12">
          <MusicWithLyric
            music={music}
            playMusic={playMusic}
          />
        </div>
        <div className="w-4/12"></div>
      </div>
      <Divider className="mb-5 mt-2" />
      <Panel className="w-full" title="Bài hát liên quan" icon="music-note">
        {fp.take(12, trendingSongs).map(song => (
          <div className="w-1/3 xl:w-1/6 lg:w-1/6 md:w-1/6 p-1/2" key={song.id}>
            <SongCard
              className="w-full --song-image-h32"
              {...song}
            />
          </div>
        ))}
      </Panel>
      <Divider className="mb-5 mt-2" />
    </MusicPageWrapper>
  );
}
const mapStateToProps = state => ({
  music: musicFormater(state.musicPageReducer.music),
  isFetching: state.musicPageReducer.isMusicFetching || state.musicPageReducer.isLyricFetching,
  trendingSongs: musicsFormater(state.homePageReducer.trendingSongs),
});
const MusicPageEnhancer = compose(
  connect(mapStateToProps),
  withPlayingMusic,
  withPlayerActions,
  withLayout,
)(MusicPage);

MusicPage.displayName = 'MusicPage';
MusicPageEnhancer.displayName = 'MusicPageEnhancer';

MusicPageEnhancer.getInitialProps = async ({ query, reduxStore: store, isServer }) => {
  console.log('query', query)
  const callApiStack = [
    store.dispatch(actionCreators.getMusic(query.id)),
  ];

  // in client-side await will be stop render
  if (isServer) {
    await Promise.all(callApiStack);
  }

  return {};
};

export default withSPA(MusicPageEnhancer);
