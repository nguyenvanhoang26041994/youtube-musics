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
      musics: fp.toArray(state.playingList.musics),
    },
  });


  return connect(
    mapStateToProps,
  )(ReturnComponent);
};

export default withPlayingList;
