import React from 'react';

const withYoutubeLink = WrappedComponent => {
  const ReturnComponent = ({ v, ...otherProps }) => {

    return (
      <a href={`https://www.youtube.com/watch?v=${v}`} className="flex" target="_blank">
        <WrappedComponent {...otherProps} />
      </a>
    );
  }

  ReturnComponent.displayName = `withYoutubeLink(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ReturnComponent
};

export default withYoutubeLink;
