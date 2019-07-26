import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icons from './svg';

const IconWrapper = styled.span`
  height: 1em;
  width: 1em;
`;

const Icon = ({ className, name, size, color, iconRef, ...otherProps }) => {
  const I = icons[name] || (() => null);

  return (
    <IconWrapper
      className={cn(`ui-svg-icon icon-${name} inline-block cursor-pointer`, { [`text-${color}`]: color, [`text-${size}`]: size }, className)}
      ref={iconRef}
      {...otherProps}
    >
      <I className="fill-current w-full h-full" />
    </IconWrapper>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};
Icon.defaultProps = {};

export default Icon;
