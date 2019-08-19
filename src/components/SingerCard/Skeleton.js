import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

const SingerCardSkeletonWrapper = styled.div``;

const SingerCardSkeleton = ({ className }) => {
  return (
    <SingerCardSkeletonWrapper className={cn('ui-singer-card-skeleton', className)}>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-gray-300 rounded-full" />
        <div className="h-6 bg-gray-300 mt-2 w-full" />
      </div>
    </SingerCardSkeletonWrapper>
  );
};

SingerCardSkeleton.displayName = 'SingerCardSkeleton';
SingerCardSkeleton.propTypes = {};
SingerCardSkeleton.defaultProps = {};

export default SingerCardSkeleton;
