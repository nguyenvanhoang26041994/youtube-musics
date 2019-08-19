import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon, Button } from '../../components/core';

const PlaylistCardSkeletonWrapper = styled.div``;
const PlaylistCardSkeletonWrapperRelative = styled.div``; 

const PlaylistCardSkeleton = ({ className }) => {
  return (
  <PlaylistCardSkeletonWrapper className={cn('ui-playlist-card-skeleton relative flex flex-col justify-end h-48 bg-gray-100', className)}>
    <div className="flex flex-col w-full m-1">
      <div className="w-2/3 bg-gray-300 my-1 h-4" />
      <div className="w-2/5 bg-teal-500 my-1 h-6" />
    </div>
    <Icon name="music-note" size="5xl" color="gray-300" className="absolute absolute-center" />
    <PlaylistCardSkeletonWrapperRelative className="m-1 h-4 absolute top-0 right-0 w-1/3 bg-gray-300" />
  </PlaylistCardSkeletonWrapper>
  );
}

PlaylistCardSkeleton.displayName = 'PlaylistCardSkeleton';
PlaylistCardSkeleton.propTypes = {};
PlaylistCardSkeleton.defaultProps = {};

export default PlaylistCardSkeleton;
