import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, others = { fallback: null }) => {
  const LazyComponent = lazy(importFunc);

  return props => (
    <Suspense fallback={others.fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
