import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../../components/core';

const SongCardSkeletonWrapper = styled.div``;

const SongCardSkeleton = ({ className }) => {
  return (
    <SongCardSkeletonWrapper className={cn('ui-song-card-skeleton flex flex-col h-64', className)}>
      <div className="flex relative h-48 w-full justify-end bg-gray-100">
        <Icon name="music-note" size="5xl" color="gray-300" className="absolute absolute-center" />
        <div className="m-1 h-4 w-1/3 bg-gray-300" />
      </div>
      <div className="flex flex-col w-full p-1">
        <div className="w-2/3 bg-gray-300 my-1 h-4" />
        <div className="w-1/3 bg-gray-300 my-1 h-4" />
      </div>
    </SongCardSkeletonWrapper>
  );
};

SongCardSkeleton.displayName = 'SongCardSkeleton';
SongCardSkeleton.propTypes = {};
SongCardSkeleton.defaultProps = {};

export default SongCardSkeleton;
