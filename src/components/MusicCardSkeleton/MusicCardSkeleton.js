import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../../components/core';

const MusicCardSkeletonWrapper = styled.div``;
const MusicCardSkeletonWrapperRelative = styled.div``;

const MusicCardSkeleton = ({ className }) => {
  return (
    <MusicCardSkeletonWrapper className={cn('ui-music-card-skeleton relative flex flex-col justify-end h-48 bg-gray-100', className)}>
      <div className="flex flex-col w-full m-1">
        <div className="w-2/3 bg-gray-300 my-1 h-4" />
        <div className="w-1/3 bg-gray-300 my-1 h-4" />
      </div>
      <Icon name="music-note" size="5xl" color="gray-300" className="absolute absolute-center" />
      <MusicCardSkeletonWrapperRelative className="m-1 h-4 absolute top-0 right-0 w-1/3 bg-gray-300" />
    </MusicCardSkeletonWrapper>
  );
};

MusicCardSkeleton.displayName = 'MusicCardSkeleton';
MusicCardSkeleton.propTypes = {};
MusicCardSkeleton.defaultProps = {};

export default MusicCardSkeleton;
