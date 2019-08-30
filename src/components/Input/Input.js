import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const InputStyled = styled.input``;

const Input = ({ className, ...otherProps }) => {
  return (
    <InputStyled {...otherProps} />
  );
};

export default Input;
