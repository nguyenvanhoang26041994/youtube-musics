import store from '../store';

const withInjectSaga = ({ key, saga, mode, args }) => WrappedComponent => {
  class ReturnComponent extends React.Component {
    constructor(props) {
      super(props);
      store._injectSaga({ key, saga, mode, args });
    }

    componentWillUnmount() {
      store._ejectSaga(key);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  ReturnComponent.displayName = `withInjectSaga(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ReturnComponent;
};

export default withInjectSaga;
