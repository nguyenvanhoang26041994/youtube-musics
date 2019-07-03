import reducer from './reducer';
import withInjectReducer from '../../HOC/withInjectReducer';

const ProductsPage = () => (
  <div id="products-page"></div>
);

export default withInjectReducer({ key: 'productsPage', reducer })(ProductsPage);
