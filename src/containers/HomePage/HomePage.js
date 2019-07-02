import { compose } from 'redux';
import withInjectReducer from '../../HOC/withInjectReducer';
import withInjectSaga from '../../HOC/withInjectSaga';
import reducer from './reducer';
import saga from './saga';

const HomePage = () => (
  <div id="home-page"></div>
);

export default compose(
  withInjectSaga({ key: 'homePage', saga }),
  withInjectReducer({ key: 'homePage', reducer }),
)(HomePage);
