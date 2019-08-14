import { connect } from 'react-redux';
import fp from 'lodash/fp';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/player';

const withPlayerActions = WrappedComponent => {
  const ReturnComponent = ({ playerActions, ...otherProps }) => (
    <WrappedComponent playerActions={playerActions} {...otherProps} />
  );

  ReturnComponent.displayName = `withPlayerActions(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  const mapStateToProps = state => ({});
  const mapDispatchToProps = dispatch => ({
    playerActions: bindActionCreators(actionCreators, dispatch),
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ReturnComponent);
};

export default withPlayerActions;
