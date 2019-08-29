import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div``;

const MusicItem = ({ className, name, singersName, orderText }) => {
  return (
    <Wrapper className={cn('h-10 flex items-center cursor-pointer text-white', className)}>
      <div className="w-10 text-xs">{orderText}</div>
      <div className="flex-1 text-sm">{name}</div>
      <div className="w-32 truncate text-gray-500 text-xs">{singersName}</div>
    </Wrapper>
  );
};

export default MusicItem;
