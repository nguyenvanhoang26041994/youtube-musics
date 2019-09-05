import React, { useEffect, useState } from 'react';
import useStore from '../hooks/useStore';

const withSPA = (WrappedComponent) => {
  if (process.env.APP_MODE !== 'SPA') {
    return WrappedComponent;
  }

  const ReturnComponent = props => {
    const reduxStore = useStore();

    useEffect(() => {
      WrappedComponent.getInitialProps({ reduxStore });
    }, []);

    return <WrappedComponent {...props} />
  }

  ReturnComponent.displayName = `withSPA(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ReturnComponent;
};

export default withSPA;
