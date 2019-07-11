import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/playing-music';

const withMusicCotroller = WrappedComponent => {
  const ReturnComponent = ({ playingMusic, playingList, playingMusicActions, ...otherProps }) => {
    const nextMusic = () => {
      const { music } = playingMusic;
    };

    return (
      <WrappedComponent playingMusic={playingMusic} playingMusicActions={playingMusicActions} {...otherProps} />
    );
  }

  ReturnComponent.displayName = `withMusicCotroller(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

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

export default withMusicCotroller;
