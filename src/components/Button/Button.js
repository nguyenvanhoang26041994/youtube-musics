import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  height: 2em;

  &.outline-none {
    outline: 0;
  }
`;

const Button = ({ className, size, color, ...otherProps }) => (
  <ButtonWrapper
    className={cn(`ui-button outline-none flex px-2 hover:shadow-lg rounded-sm justify-center items-center text-${size} bg-${color}`, className)}
    {...otherProps}
  />
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
Button.defaultProps = {
  size: 'base',
  color: 'blue-500',
};

export default Button;
