import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import Input from '../Input';

const Wrapper = styled.div``;

const InputField = ({ className, inputClassName, field, ...otherProps }) => {
  return (
    <Wrapper className={cn('flex flex-col', className)}>
      <div className="text-gray-800">{field}</div>
      <Input {...otherProps} className={cn('w-full', inputClassName)}/>
    </Wrapper>
  );
};

export default InputField;
