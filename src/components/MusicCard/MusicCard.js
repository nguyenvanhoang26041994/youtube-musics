import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon, Image } from '../../components/core';
import formatNumber from '../../utils/formatNumber';

const MusicCardWrapper = styled.div`
  &.ui-music-card {
    .ui-music-card__playbutton {
      opacity: 0;
      transition: 0.5s;
    }

    .ui-music-card__bg-img {
      img {
        filter: blur(1px) grayscale(50%) brightness(50%);;
        transition: 0.5s;
        transform: scale(1.1, 1.1);
      }
    }

    &:hover {
      .ui-music-card__bg-img {
        img {
          filter: none;
          transform: scale(1.2, 1.2);
        }
      }

      .ui-music-card__playbutton {
        opacity: 1;
      }
    }
  }
`;

const MusicCardWrapperRelative = styled.div``;

const MusicCard = ({ className, onClick, img, name, listenCount, singersName }) => {
  return (
    <MusicCardWrapper className={cn('ui-music-card cursor-pointer', className)}>
      <MusicCardWrapperRelative className="w-full h-48 relative flex flex-col justify-end p-2">
        <div className="text-white text-sm">{name}</div>
        <div className="text-gray-500 text-xs">{singersName}</div>
        <div className="text-white flex items-center absolute top-0 right-0 m-2">
          <span className="font-mono text-2xs">{formatNumber(listenCount)}</span>
          <Icon name="headphones" className="ml-2 text-2xs" />
        </div>
        <div className="ui-music-card__playbutton absolute z-10 absolute-center">
          <Icon name="play-circle" size="6xl" color="gray-200" onClick={onClick} />
        </div>
        <Image className="ui-music-card__bg-img w-full h-full absolute z-m1 top-0 left-0" src={img} />
      </MusicCardWrapperRelative>
    </MusicCardWrapper>
  );
};

MusicCard.displayName = 'MusicCard';
MusicCard.propTypes = {};
MusicCard.defaultProps = {};

export default MusicCard;
