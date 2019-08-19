import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MusicWithLyricSkeletonWrapper = styled.div``;

const MusicWithLyricSkeleton = ({ className }) => {
  return (
    <MusicWithLyricSkeletonWrapper className={cn('ui-music-with-lyric-skeleton flex flex-col items-center', className)}>
      <div className="h-8 bg-teal-400 w-32 flex rounded-full" />
      <div className="mt-5 flex flex-col w-full items-center">
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-4/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-4/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-7/12 mb-1" />
        <div className="h-2 bg-gray-300 w-1/12 mb-1" />
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-4/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-4/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-7/12 mb-1" />
        <div className="h-2 bg-gray-300 w-1/12 mb-1" />
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-4/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-4/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-3/12 mb-1" />
        <div className="h-2 bg-gray-300 w-6/12 mb-1" />
        <div className="h-2 bg-gray-300 w-8/12 mb-1" />
        <div className="h-2 bg-gray-300 w-7/12 mb-1" />
        <div className="h-2 bg-gray-300 w-1/12 mb-1" />
      </div>
    </MusicWithLyricSkeletonWrapper>
  );
};

export default MusicWithLyricSkeleton;
