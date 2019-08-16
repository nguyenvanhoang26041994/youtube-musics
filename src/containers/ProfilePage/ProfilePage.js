import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styled from 'styled-components';

import { Image, Icon } from '../../components/core';
import Profile from '../../components/Profile';
import musicsFormater from '../../selectors/utils/musicsFormater';

const ProfilePageWrapper = styled.div``;

const ProfilePage = ({ className, musics }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ProfilePageWrapper className={cn('profile-page container-custom container mx-auto flex flex-col flex-1 animated fadeIn', className)}>
      <Profile musics={musics} />
    </ProfilePageWrapper>
  );
};

ProfilePage.displayName = 'ProfilePage';
ProfilePage.propTypes = {};
ProfilePage.defaultProps = {};

const mapStateToProps = state => ({
  musics: musicsFormater(
    state.playlistsReducer.playlists[0]
      ? state.playlistsReducer.playlists[0].musics
      : []
  ),
});

export default compose(
  connect(mapStateToProps),
)(ProfilePage);
