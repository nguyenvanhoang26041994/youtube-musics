import '../../assets/css/tailwind.scss';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import Layout from '../layouts/Layout';
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default RootApp;
