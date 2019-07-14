import React from 'react';
import ClickOutside from '../components/ClickOutside';

const withClickOutside = WrappedComponent => {
  const ReturnComponent = ({ clickOutsideUpdate, ...otherProps }) => (
    <ClickOutside update={clickOutsideUpdate}>
      <WrappedComponent {...otherProps} />
    </ClickOutside>
  );

  ReturnComponent.displayName = `withClickOutside(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ReturnComponent;
};

export default withClickOutside;
