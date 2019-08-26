import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Image } from '../../components/core';

const SongItemWrapper = styled.div``;

const SongItem = ({ className, name, singersName, img }) => {
  return (
    <SongItemWrapper className={cn('flex cursor-pointer', className)}>
      <Image src={img} className="w-12 h-12" />
      <div className="flex flex-col w-full ml-2 justify-center">
        <div className="text-sm text-indigo-500">{name}</div>
        <div className="text-xs text-gray-500">{singersName}</div>
      </div>
    </SongItemWrapper>
  );
};

export default SongItem;
