import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Image } from '../../components/core'

const SongCardWrapper = styled.div`

`;

const SongCard = ({ className, singersName, name, img, onClick }) => {
  return (
    <SongCardWrapper className={cn('ui-song-card flex flex-col cursor-pointer', className)}>
      <Image src={img} className="ui-song-card__img w-full h-32" onClick={onClick} />
      <div className="w-full h-12 flex flex-col justify-center">
        <div className="text-sm text-indigo-500 w-full truncate">{name}</div>
        <div className="text-xs text-gray-700 w-full truncate">{singersName}</div>
      </div>
    </SongCardWrapper>
  );
};

export default SongCard;
