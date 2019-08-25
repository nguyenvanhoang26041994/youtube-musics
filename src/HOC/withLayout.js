import React from 'react';
import Layout from '../layouts/Layout';
import GlobalMusicPlayer from '../containers/GlobalMusicPlayer';

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
