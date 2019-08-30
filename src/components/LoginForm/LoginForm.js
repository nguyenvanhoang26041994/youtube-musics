import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Button, Input } from '../../components/core';

const Wrapper = styled.div``;

const LoginForm = ({ className }) => {
  return (
    <Wrapper className={cn('login-form', className)}>
      <Input />
    </Wrapper>
  );
};

export default LoginForm;
