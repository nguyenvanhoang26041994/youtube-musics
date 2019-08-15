import { connect } from 'react-redux';
import fp from 'lodash/fp';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/playing-list';

const withPlayingList = WrappedComponent => {
  const ReturnComponent = ({ playingList, playingListActions, ...otherProps }) => (
    <WrappedComponent playingList={playingList} playingListActions={playingListActions} {...otherProps} />
  );

  ReturnComponent.displayName = `withPlayingList(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  const mapStateToProps = state => ({
    playingList: {
      ...state.playingList,
      // listenCount: fp.sumBy(music => music.listenCount)(state.playingList.musics),
      musics: fp.compose(
        fp.map(music => {
          return {
            ...music,
            singersName: music.singers.map(singer => singer.name).join(', '),
          };
        }),
      )(state.playingList.musics),
    },
  });

  const mapDispatchToProps = dispatch => ({
    playingListActions: bindActionCreators(actionCreators, dispatch)
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ReturnComponent);
};

export default withPlayingList;
