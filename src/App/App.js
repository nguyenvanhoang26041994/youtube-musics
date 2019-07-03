import '../../assets/css/tailwind.scss';
import './App.scss';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import Layout from '../layouts/Layout';
import BottomPlayer from '../components/BottomPlayer';
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
          <BottomPlayer className="fixed bottom-0 w-screen" />
        </Provider>
      </Container>
    );
  }
}

export default RootApp;
