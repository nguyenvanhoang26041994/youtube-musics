import React from 'react';
import Layout from '../layouts.mobile/Layout';
// import GlobalMusicPlayer from '../containers/GlobalMusicPlayer';

const withMobileLayout = WrappedComponent => {
  const ReturnComponent = props => (
    <Layout>
      <WrappedComponent {...props} />
      {/* <GlobalMusicPlayer className="z-20" /> */}
    </Layout>
  );

  ReturnComponent.displayName = `withMobileLayout(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ReturnComponent;
};

export default withMobileLayout;
