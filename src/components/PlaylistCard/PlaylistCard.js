import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlaylistCardWrapper = styled.section`
  &.ui-playlist-card {
    background-color: #232526;
  }
`;

const PlaylistCard = ({ className }) => {
  return (
    <PlaylistCardWrapper className={cn('ui-playlist-card h-48 w-48 cursor-pointer', className)}>

    </PlaylistCardWrapper>
  );
};

PlaylistCard.displayName = 'PlaylistCard';
PlaylistCard.propTypes = {};
PlaylistCard.defaultProps = {};

export default PlaylistCard;
