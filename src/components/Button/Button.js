import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  height: 2em;

  &:disabled {
    cursor: not-allowed;
  }

  &.outline-none {
    outline: 0;
  }
`;

const Button = ({ className, size, color, buttonRef, ...otherProps }) => (
  <ButtonWrapper
    className={cn(`ui-button outline-none flex px-2 hover:shadow-lg justify-center items-center text-${size} bg-${color}`, className)}
    ref={buttonRef}
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
