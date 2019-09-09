import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import useStore from '../hooks/useStore';

const withSPA = (WrappedComponent) => {
  if (process.env.APP_MODE !== 'SPA') {
    return WrappedComponent;
  }

  const ReturnComponent = props => {
    const reduxStore = useStore();
    const router = useRouter();
    useEffect(() => {
      WrappedComponent.getInitialProps({
        reduxStore,
        isServer: false,
        query: router.query,
      });
    }, []);

    return <WrappedComponent {...props} />
  }

  ReturnComponent.displayName = `withSPA(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ReturnComponent;
};

export default withSPA;
