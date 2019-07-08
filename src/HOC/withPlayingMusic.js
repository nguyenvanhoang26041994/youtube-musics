import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/playing-music';

const withPlayingMusic = WrappedComponent => {
  const ReturnComponent = ({ playingMusic, playingMusicActions, ...otherProps }) => (
    <WrappedComponent playingMusic={playingMusic} playingMusicActions={playingMusicActions} {...otherProps} />
  );

  const mapStateToProps = state => ({
    playingMusic: {
      ...state.playingMusic,
      isShowPlayer: true || state.playingMusic.id,
    },
  });

  const mapDispatchToProps = dispatch => ({
    playingMusicActions: bindActionCreators(actionCreators, dispatch)
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ReturnComponent);
};

export default withPlayingMusic;
