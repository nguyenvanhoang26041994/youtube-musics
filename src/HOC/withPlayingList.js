import { connect } from 'react-redux';
import fp from 'lodash/fp';

const withPlayingList = WrappedComponent => {
  const ReturnComponent = ({ playingList, ...otherProps }) => (
    <WrappedComponent playingList={playingList} {...otherProps} />
  );

  ReturnComponent.displayName = `withPlayingList(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  const mapStateToProps = state => ({
    playingList: {
      ...state.playingList,
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


  return connect(
    mapStateToProps,
  )(ReturnComponent);
};

export default withPlayingList;
