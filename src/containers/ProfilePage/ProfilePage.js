import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styled from 'styled-components';

import { Image, Icon } from '../../components/core';
import Profile from '../../components/Profile';
import musicsFormater from '../../selectors/utils/musicsFormater';

import * as actionCreators from './actions';

const ProfilePageWrapper = styled.div``;

const ProfilePage = ({ className, musics, profile }) => {
  return (
    <ProfilePageWrapper className={cn('profile-page container-custom container mx-auto flex flex-col flex-1 animated fadeIn', className)}>
      <Profile musics={musics} profile={profile} />
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
  profile: state.profilePageReducer.profile,
});

const ProfilePageEnhancer = compose(
  connect(mapStateToProps),
)(ProfilePage);

ProfilePageEnhancer.displayName= 'ProfilePageEnhancer';

ProfilePageEnhancer.getInitialProps = async ({ query, reduxStore: store, isSever }) => {
  await store.dispatch(actionCreators.getProfile(query.id));
  return {};
}

export default ProfilePageEnhancer;
