import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Image, Icon } from '../../components/core';
import formatNumber from '../../utils/formatNumber';

const SongCardWrapper = styled.div`
  &.ui-song-card {
    .ui-song-card__bg-img {
      img {
        filter: none;
        transform: scale(1.1, 1.1);
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
          filter: blur(1px) grayscale(50%) brightness(50%);
          transform: scale(1.2, 1.2);
        }
      }

      .ui-song-card__playbutton {
        opacity: 1;
      }
    }
  }
`;

const SongCardWrapperRelative = styled.div``;

const SongCard = ({ className, img, name, singers, listenCount, onClick }) => {
  return (
    <SongCardWrapper className={cn('ui-song-card h-64 cursor-pointer flex flex-col', className)}>
      <SongCardWrapperRelative className="w-full h-48 relative">
        <div className="ui-song-card__playbutton absolute z-10 absolute-center">
          <Icon name="play-circle" size="6xl" color="gray-200" onClick={onClick} />
        </div>
        <div className="text-white flex items-center absolute top-0 right-0 m-2 z-10">
          <span className="font-mono text-2xs">{formatNumber(listenCount)}</span>
          <Icon name="headphones" className="ml-2 text-2xs" />
        </div>
        <Image className="ui-song-card__bg-img w-full h-full" src={img} />
      </SongCardWrapperRelative>

      <div className="flex flex-col w-full p-1">
        <h2 className="text-sm font-bold text-white overflow-hidden truncate">{name}</h2>
        <div className="flex w-full overflow-hidden truncate">
          {singers.map((singer, idx) => (
            <Link href={`/profile?id=${singer.id}`} as={`/profile/${singer.id}`} key={singer.id}>
              <a>
                <h3 className="text-xs font-bold text-gray-300 flex">
                  <span>{singer.name}</span>
                  <span className="mr-1">{singers.length <= idx + 1 ? '' : ','}</span>
                </h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </SongCardWrapper>
  );
}

SongCard.displayName = 'SongCard';
SongCard.propTypes = {};
SongCard.defaultProps = {};

export default SongCard;
