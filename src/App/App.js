import '../../assets/css/tailwind.scss';
import '../../assets/css/user.scss';
import App from 'next/app';
import { Provider } from 'react-redux';
import fp from 'lodash/fp';
import MobileDetect from 'mobile-detect';
import { registerMobile } from '../HOC/mobile';

import GlobalAudio from '../containers/GlobalAudio';
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


function getOrCreateMobileVariable (initialVaule) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return {};
  }

  if (!window['MOBILE_VAR']) {
    window['MOBILE_VAR'] = initialVaule;
  }
  return registerMobile(window['MOBILE_VAR']);
}

class RootApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    const md = new MobileDetect(isServer ? ctx.req.headers['user-agent'] : navigator.userAgent);
    const mobile = md.mobile();

    ctx.isServer = isServer;
    ctx.mobile = mobile;

    await registerGlobalState(ctx);

    let props = {};
    if (Component.getInitialProps) {
      props = await Component.getInitialProps(ctx)
    }

    return {
      pageProps: props,
      mobile: ctx.mobile,
    };
  }

  constructor (props) {
    super(props);
    this.mobile = getOrCreateMobileVariable(props.mobile);
  }

  render() {
    const { Component, pageProps, reduxStore, mobile } = this.props;

    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} mobile={mobile} />
        <GlobalAudio />
      </Provider>
    );
  }
}

export default fp.compose(
  withReduxStore,
  withCache,
)(RootApp);
