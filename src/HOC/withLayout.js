import React from 'react';
import Layout from '../layouts.desktop/Layout';
import GlobalMusicPlayer from '../containers/GlobalMusicPlayer.desktop';

const withLayout = WrappedComponent => {
  const ReturnComponent = props => (
    <Layout>
      <WrappedComponent {...props} />
      <GlobalMusicPlayer className="z-50" />
    </Layout>
  );

  ReturnComponent.displayName = `withLayout(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ReturnComponent;
};

export default withLayout;
