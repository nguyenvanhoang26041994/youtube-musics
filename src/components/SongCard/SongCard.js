import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SongCardWrapper = styled.div``;

const SongCard = ({ className }) => {
  return (
    <SongCardWrapper className={cn('ui-song-card', className)}></SongCardWrapper>
  );
}

SongCard.displayName = 'SongCard';
SongCard.propTypes = {};
SongCard.defaultProps = {};

export default SongCard;
