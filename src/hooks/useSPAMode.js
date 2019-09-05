import React, { useEffect } from 'react';
import useStore from './useStore';

const useSPAMode = (gotInitialProps, getInitialProps) => {
  const { dispatch, getState } = useStore();
  useEffect(() => {
    if (!gotInitialProps) {
      getInitialProps({
        reduxStore: {
          dispatch,
          getState,
        },
        isServer: false,
      });
    }
  }, []);
};

export default useSPAMode;