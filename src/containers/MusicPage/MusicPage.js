import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button, Icon } from '../../components/core';
import MusicWithLyric from '../../components/MusicWithLyric';
import MusicWithLyricSkeleton from '../../components/MusicWithLyric/Skeleton';
import musicFormater from '../../selectors/utils/musicFormater';
import * as actionCreators from './actions';
import withPlayerActions from '../../HOC/withPlayerActions';
import withPlayingMusic from '../../HOC/withPlayingMusic';

const MusicPageWrapper = styled.div``;
const MainSection = styled.section``;

const MusicPage = ({ className, music, playerActions, playingMusic, lyric, isFetching }) => {
  const isSetToPlayerAlready = playingMusic.id === music.id;
  const playMusic = () => {
    if (isSetToPlayerAlready) {
      return;
    }

    return playerActions.playMusicAndResetPlayingList(music)
  };

  return (
    <MusicPageWrapper className={cn('music-page container-custom container mx-auto flex flex-col animated fadeIn', className)}>
      {isFetching ? (
        <MusicWithLyricSkeleton className="w-full" />
      ) : (
        <MusicWithLyric
          music={music}
          playMusic={playMusic}
          lyric={lyric}
        />
      )}
    </MusicPageWrapper>
  );
}
const mapStateToProps = state => ({
  music: musicFormater(state.musicPageReducer.music),
  lyric: state.musicPageReducer.lyric,
  isFetching: state.musicPageReducer.isMusicFetching || state.musicPageReducer.isLyricFetching,
});
const MusicPageEnhancer = compose(
  connect(mapStateToProps),
  withPlayingMusic,
  withPlayerActions,
)(MusicPage);

MusicPage.displayName = 'MusicPage';
MusicPageEnhancer.displayName = 'MusicPageEnhancer';

MusicPageEnhancer.getInitialProps = async ({ query, reduxStore: store, isSever }) => {
  const callApiStack = [
    store.dispatch(actionCreators.getMusic(query.id)),
    store.dispatch(actionCreators.getLyric(query.id)),
  ];

  // in client-side await will be stop render
  if (isSever) {
    await Promise.all(callApiStack);
  }

  return {};
};

export default MusicPageEnhancer;
