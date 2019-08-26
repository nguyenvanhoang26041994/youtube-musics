import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Image, Icon } from '../../components/core';

const SongItemWrapper = styled.div`
  .--filter img {
    filter: grayscale(70%);
  }

  .ui-song-item__info {
    display: flex;
  }

  .ui-song-item__actions {
    display: none;
  }

  /* &:hover {
    .ui-song-item__info {
      display: none;
    }

    .ui-song-item__actions {
      display: flex;
    }
  } */
`;
const SongItemActions = styled.div``;

const SongItem = ({ className, name, singersName, img, rank, onClick, ...otherProps }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <SongItemWrapper
      className={cn('ui-song-item flex cursor-pointer relative', className)}
      onClick={onClick}
      {...otherProps}
    >
      <div className="w-12 h-12 text-indigo-500 text-xl flex items-center justify-center" onClick={onClick}>
        {rank}
      </div>
      <div className={cn('ui-song-item__info flex flex-col flex-1 ml-2 justify-center')}>
        <div className="text-sm text-indigo-500 w-full truncate">{name}</div>
        <div className="text-xs text-gray-500 w-full truncate">{singersName}</div>
      </div>
    </SongItemWrapper>
  );
};

export default SongItem;
