import { connect } from 'react-redux';
import { changeIsPlaying, changeMusic } from '../actions/playing-music';

const withPlayingMusic = WrappedComponent => {
  const ReturnComponent = ({ playingMusic, playingMusicActions, ...otherProps }) => (
    <WrappedComponent playingMusic={playingMusic} playingMusicActions={playingMusicActions} {...otherProps} />
  );

  const mapStateToProps = state => ({
    playingMusic: {
      ...state.playingMusic,
      isShowPlayer: state.playingMusic.id,
    },
  });

  const mapDispatchToProps = dispatch => ({
    playingMusicActions: {
      changeIsPlaying(isPlaying) {
        return dispatch(changeIsPlaying(isPlaying))
      },
      changeMusic(payload) {
        return dispatch(changeMusic(payload));
      },
    },
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ReturnComponent);
};

export default withPlayingMusic;
