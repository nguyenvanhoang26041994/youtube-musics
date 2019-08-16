import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

import { Image, Icon } from '../../components/core';

const SingerCardWrapper = styled.div`
  &.ui-singer-card {
    .ui-singer-card__avatar {
      filter: blur(2px) grayscale(50%) brightness(50%);;
      transition: 0.5s;

      &:hover {
        filter: none;
        transform: scale(1.1, 1.1);
      }
    }
  }
`;

const SingerCard = ({ className, avatarImg, name, id, isVerified }) => {
  return (
    <Link href={`/profile?id=${id}`} as={`/profile/${id}`}>
      <SingerCardWrapper className={cn('ui-singer-card relative cursor-pointer flex flex-col items-center', className)}>
        <Image className="ui-singer-card__avatar rounded-full h-48 w-48" src={avatarImg} />
        <div className="h-12 w-full flex justify-center items-center text-white font-lovers-quarrel text-2xl">
          {name}
          {isVerified && <Icon name="verified" size="xs" color="teal-400" className="ml-3" />}
        </div>
      </SingerCardWrapper>
    </Link>
  );
};

SingerCard.displayName = 'SingerCard';
SingerCard.propTypes = {};
SingerCard.defaultProps = {};

export default SingerCard;
