import './Divider.scss';
import React from 'react';
import cn from 'classnames';

const Divider = ({ className }) => (
  <div className={cn('ui-divider', className)} />
);

export default Divider;
