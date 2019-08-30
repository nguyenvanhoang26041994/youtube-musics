import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import withLayout from '../../../HOC/withLayout';

const Wrapper = styled.div``;

const LoginPage = ({ className }) => {
  return (
    <Wrapper className={cn('login-page', className)}></Wrapper>
  );
};

export default withLayout(LoginPage);
