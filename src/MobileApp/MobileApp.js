import '../../assets/css/tailwind.scss';
import '../../assets/css/user.scss';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import store from '../store';

class RootApp extends App {
  static getInitialProps = async ({ Component, ctx }) =>
    Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : { pageProps: {} };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default RootApp;
