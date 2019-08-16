import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image, Icon } from '../../components/core';
import formatNumber from '../../utils/formatNumber';

const SongCardWrapper = styled.div`
  &.ui-song-card {
    .ui-song-card__bg-img {
      img {
        filter: none;
        transition: 0.5s;
      }
    }

    .ui-song-card__playbutton {
      opacity: 0;
      transition: 0.5s;
    }

    &:hover {
      .ui-song-card__bg-img {
        img {
          filter: blur(2px) grayscale(50%) brightness(50%);
          transform: scale(1.1, 1.1);
        }
      }

      .ui-song-card__playbutton {
        opacity: 1;
      }
    }
  }
`;

const SongCard = ({ className, img, name, singersName, listenCount, onClick }) => {
  return (
    <SongCardWrapper className={cn('ui-song-card h-64 w-48 cursor-pointer p-1 flex flex-col', className)}>
      <div className="w-full h-48 relative">
        <div className="ui-song-card__playbutton absolute z-10 absolute-center">
          <Icon name="play-circle" size="6xl" color="gray-200" onClick={onClick} />
        </div>
        <div className="text-white flex items-center absolute top-0 right-0 m-2 z-10">
          <span className="font-mono text-2xs">{formatNumber(listenCount)}</span>
          <Icon name="headphones" className="ml-2 text-2xs" />
        </div>
        <Image className="ui-song-card__bg-img w-full h-full" src={img} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-sm font-bold text-white">{name}</h2>
        <h3 className="text-xs font-bold text-gray-500">{singersName}</h3>
      </div>
    </SongCardWrapper>
  );
}

SongCard.displayName = 'SongCard';
SongCard.propTypes = {};
SongCard.defaultProps = {};

export default SongCard;
