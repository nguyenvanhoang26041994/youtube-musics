import '../../assets/css/tailwind.scss';
import '../../assets/css/user.scss';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import fp from 'lodash/fp';

import Layout from '../layouts/Layout';
import GlobalMusicPlayer from '../containers/GlobalMusicPlayer';
import withReduxStore from '../libs/with-redux-store';
import withCache from '../libs/with-cache';
import isServer from '../utils/isServer';
// require('../components/AudioAnalyzer-new'); // please DON'T REMOVE THIS LINE, we register something here

const appVersion = '2.0.0';

// To make cool performace, we don't let browser fetch API to get common data which one rarely change
// Ex: Dynamic topmenu or some data for selectbox
// SHOULD BE COOL
const registerGlobalState = ({ reduxStore, isServer }) => new Promise((resolve, reject) => {
  if (isServer) {
    reduxStore.dispatch({ type: 'CHANGE_APP_VERSION', payload: appVersion });
    return resolve({});
  }

  return resolve({});
});

class RootApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    ctx.isServer = isServer;

    await registerGlobalState(ctx);

    return Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : { pageProps: {} };
  }


  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <GlobalMusicPlayer className="z-20" />
        </Provider>
      </Container>
    );
  }
}

export default fp.compose(
  withReduxStore,
  withCache,
)(RootApp);
