import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

import { Image, Icon } from '../../components/core';

const SingerCardWrapper = styled.div`
  &.ui-singer-card {
    .ui-singer-card__avatar {
      filter: blur(1px) grayscale(50%) brightness(50%);
      transform: scale(1.1, 1.1);
      transition: 0.5s;

      &:hover {
        filter: none;
        transform: scale(1.2, 1.2);
      }
    }
  }
`;

const SingerCardWrapperRelative = styled.div``;

const SingerCard = ({ className, avatarImg, name, id, isVerified }) => {
  return (
    <Link href={`/profile?id=${id}`} as={`/profile/${id}`}>
      <SingerCardWrapper className={cn('ui-singer-card cursor-pointer', className)}>
        <SingerCardWrapperRelative className="relative top-0 left-0 flex flex-col items-center">
          <Image className="ui-singer-card__avatar rounded-full h-32 w-32" src={avatarImg} />
          <div className="h-16 w-full flex justify-center items-center text-white">
            {name}
            {isVerified && <Icon name="verified" size="xs" color="teal-400" className="ml-3" />}
          </div>
        </SingerCardWrapperRelative>
      </SingerCardWrapper>
    </Link>
  );
};

SingerCard.displayName = 'SingerCard';
SingerCard.propTypes = {};
SingerCard.defaultProps = {};

export default SingerCard;
