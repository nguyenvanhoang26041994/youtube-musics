import { connect } from 'react-redux';
import fp from 'lodash/fp';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/playing-list';
import playingListSelector from '../selectors/playingListSelector';

const withPlayingList = WrappedComponent => {
  const ReturnComponent = ({ playingList, playingListActions, ...otherProps }) => (
    <WrappedComponent playingList={playingList} playingListActions={playingListActions} {...otherProps} />
  );

  ReturnComponent.displayName = `withPlayingList(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  const mapStateToProps = state => ({
    playingList: playingListSelector(state),
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
