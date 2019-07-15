import dynamic from 'next/dynamic';

const withLazy = (loaded) => {
  const DynamicComponentWithNoSSR = dynamic(loaded, { ssr: false });

  return DynamicComponentWithNoSSR;
};

export default withLazy;
