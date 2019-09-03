import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Button, Logo } from '../../components/core';
import InputField from '../../components/form/InputField';

const Wrapper = styled.div`
  .__bg {
    img {
      filter: blur(130px);
    }
  }
`;

const LoginForm = ({ className, style }) => {
  return (
    <Wrapper className={cn('login-form flex flex-col shadow-2xl rounded-sm bg-white items-center relative', className)} style={style}>
      <Logo className="__bg absolute w-full h-full top-0 left-0"/>
      <div className="flex flex-col items-center justify-center w-48 py-10 z-10 text-sm" style={{ height: '30rem' }}>
        <div className="w-full">
          <Button className="text-white w-full" size="sm" color="indigo-500">Đăng nhập bằng Facebook</Button>
        </div>
        <div className="my-5">hoặc</div>
        <div className="flex flex-col w-full mb-5">
          <InputField className="mb-2 w-full text-sm" inputClassName="rounded-sm" type="email" field="Email"/>
          <InputField className="mb-2 w-full text-sm" inputClassName="rounded-sm" type="password" field="Mật khẩu" />
        </div>
        <Button disabled color="indigo-400" className="rounded-sm w-full text-white" size="sm">Đăng nhập</Button>
      </div>
    </Wrapper>
  );
};

export default LoginForm;
