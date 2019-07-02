import store from '../store';

const withInjectReducer = ({ key, reducer }) => WrappedComponent => {
  class ReturnComponent extends React.Component {
    constructor(props) {
      super(props);
      store._injectReducer({ key, reducer });
    }

    componentWillUnmount() {
      store._removeInjectedReducerove(key);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  ReturnComponent.displayName = `withInjectReducer(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ReturnComponent;
};

export default withInjectReducer;
