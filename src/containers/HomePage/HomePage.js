import './HomePage.scss';
import { compose } from 'redux';
import withInjectReducer from '../../HOC/withInjectReducer';
import withInjectSaga from '../../HOC/withInjectSaga';
import reducer from './reducer';
import saga from './saga';

const HomePage = () => (
  <div id="home-page" className="container mx-auto">
  </div>
);

export default compose(
  withInjectSaga({ key: 'homePage', saga }),
  withInjectReducer({ key: 'homePage', reducer }),
)(HomePage);
