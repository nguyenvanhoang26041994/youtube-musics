import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styled from 'styled-components';

import { Image, Icon } from '../../components/core';
import Profile from '../../containers/Profile';
import musicsFormater from '../../selectors/utils/musicsFormater';

import * as actionCreators from './actions';

const ProfilePageWrapper = styled.div``;

const ProfilePage = ({ className, ownerMusics, profile }) => {
  return (
    <ProfilePageWrapper className={cn('profile-page container-custom container mx-auto flex flex-col flex-1 animated fadeIn', className)}>
      <Profile ownerMusics={ownerMusics} profile={profile} />
    </ProfilePageWrapper>
  );
};

ProfilePage.displayName = 'ProfilePage';
ProfilePage.propTypes = {};
ProfilePage.defaultProps = {};

const mapStateToProps = state => ({
  ownerMusics: musicsFormater(state.profilePageReducer.ownerMusics),
  profile: state.profilePageReducer.profile,
});

const ProfilePageEnhancer = compose(
  connect(mapStateToProps),
)(ProfilePage);

ProfilePageEnhancer.displayName= 'ProfilePageEnhancer';

ProfilePageEnhancer.getInitialProps = async ({ query, reduxStore: store, isSever }) => {
  // in client-side await will be stop render
  if (isSever) {
    await store.dispatch(actionCreators.getProfile(query.id));
    await store.dispatch(actionCreators.getOwnerMusics(query.id));
  } else {
    store.dispatch(actionCreators.getProfile(query.id));
    store.dispatch(actionCreators.getOwnerMusics(query.id));
  }

  return {};
}

export default ProfilePageEnhancer;
