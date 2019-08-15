import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Image = ({ className, ...otherProps }) => {
  return (
    <div className={cn('ui-image overflow-hidden', className)}>
      <img {...otherProps} className="w-full h-full object-cover" />
    </div>
  );
};

export default Image;
