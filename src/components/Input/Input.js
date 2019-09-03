import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const InputWrapper = styled.input`
  height: 2em;

  &:disabled {
    cursor: not-allowed;
  }

  &.outline-none {
    outline: 0;
  }
`;

const Input = ({ className, ...otherProps }) => {
  return (
    <InputWrapper className={cn('ui-input outline-none border border-gray-400 focus:border-gray-600 px-2 hover:shadow-2xl focus:shadow-2xl', className)} {...otherProps} />
  );
};

export default Input;
