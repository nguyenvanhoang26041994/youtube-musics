import '../../assets/css/tailwind.scss';
import '../../assets/css/user.scss';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import fp from 'lodash/fp';
import MobileDetect from 'mobile-detect';
import { registerMobile } from '../HOC/mobile';

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
const registerGlobalState = ({ reduxStore, isServer, mobile }) => new Promise((resolve, reject) => {
  if (isServer) {
    reduxStore.dispatch({ type: 'CHANGE_APP_VERSION', payload: appVersion });
    reduxStore.dispatch({ type: 'DESKTOP_OR_MOBILE', payload: mobile });
    return resolve({});
  }

  return resolve({});
});

class RootApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    const md = new MobileDetect(ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent);
    const mobile = md.mobile();

    registerMobile(mobile);

    ctx.isServer = isServer;
    ctx.mobile = mobile;

    await registerGlobalState(ctx);

    return Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : { pageProps: {}, mobile };
  }

  render() {
    const { Component, pageProps, reduxStore, mobile } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} mobile={mobile} />
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
