import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Image, Icon } from '../../components/core';

const SongSmallCardWrapper = styled.div`
  .--filter img {
    filter: grayscale(70%);
  }

  .ui-song-small-card__actions {
    display: none;
  }

  &:hover {
    .ui-song-small-card__actions {
      display: flex;
    }
  }
`;
const SongSmallCardActions = styled.div``;

const SongSmallCard = ({ className, name, singersName, img, onClick, ...otherProps }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <SongSmallCardWrapper
      className={cn('ui-song-small-card flex cursor-pointer relative', className)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...otherProps}
    >
      <Image src={img} className="w-12 h-12 --filter" onClick={onClick} />
      <div className={cn('ui-song-small-card__info flex flex-col flex-1 ml-2 justify-center')}>
        <div className="text-sm text-indigo-500 w-full truncate">{name}</div>
        <div className="text-xs text-gray-500 w-full truncate">{singersName}</div>
      </div>

      <SongSmallCardActions className={cn('ui-song-small-card__actions absolute right-0 top-haft translate-y-mhaft z-10')}>
        <Icon name="heart" color="indigo-400 mr-2" />
        <Icon name="ellipsis-h" color="indigo-400 mr-2" />
      </SongSmallCardActions>
    </SongSmallCardWrapper>
  );
};

export default SongSmallCard;
