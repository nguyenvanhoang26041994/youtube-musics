import withInjectReducer from '../../HOC/withInjectReducer';
import reducer from './reducer';

const HomePage = () => (
  <div id="home-page"></div>
);

export default withInjectReducer({ key: 'homePage', reducer })(HomePage);
