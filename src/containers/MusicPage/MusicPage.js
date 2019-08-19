import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button, Icon } from '../../components/core';

import musicFormater from '../../selectors/utils/musicFormater';
import * as actionCreators from './actions';
import withPlayerActions from '../../HOC/withPlayerActions';
import withPlayingMusic from '../../HOC/withPlayingMusic';

const MusicPageWrapper = styled.div``;
const MainSection = styled.section``;

const MusicPage = ({ className, music, playerActions, playingMusic, lyric }) => {
  const [isCollapsed, setCollapsed] = React.useState(true);
  const isSetToPlayerAlready = playingMusic.id === music.id;
  const playMusic = () => {
    if (isSetToPlayerAlready) {
      return;
    }

    return playerActions.playMusicAndResetPlayingList(music)
  };

  const toggleLyric = () => setCollapsed(prevValue => !prevValue);

  return (
    <MusicPageWrapper className={cn('music-page container-custom container mx-auto flex flex-col animated fadeIn', className)}>
      <MainSection className="flex flex-col h-screen-min w-full">
        <div className="w-full flex justify-center">
          <Button size="sm" color="teal-400" className={cn('m-2 text-white rounded-full sticky top-0')} onClick={playMusic}>
            <div className="text-sm flex items-center mx-4">
              <Icon name="music-note" className="mr-3" />
              <span className="font-lovers-quarrel text-xl">{music.singersName} - {music.name}</span>
              <Icon name="music-note" className="ml-3" />
            </div>
          </Button>
        </div>
        {lyric && lyric.data && lyric.data.length && (
          <div className="flex flex-col">
            <ul className="flex flex-col items-center font-shadows-into-light text-base overflow-hidden" style={{ height: isCollapsed ? '500px' : 'auto' }}>
              {lyric && lyric.data.map((obj, idx) => (
                <li key={idx}>
                  <p className="text-gray-100">{obj.text}</p>
                </li>
              ))}
            </ul>
            <Icon
              name="ellipsis-h"
              color="teal-400"
              size="sm"
              className="mx-auto mt-5"
              onClick={toggleLyric}
            />
          </div>
        )}
      </MainSection>
    </MusicPageWrapper>
  );
}
const mapStateToProps = state => ({
  music: musicFormater(state.musicPageReducer.music),
  lyric: state.musicPageReducer.lyric,
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
