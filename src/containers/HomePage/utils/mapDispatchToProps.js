import * as actionCreators from '../actions';

export default dispatch => ({
  getTopicMusics: id => dispatch(actionCreators.getTopicMusics(id)),
});
