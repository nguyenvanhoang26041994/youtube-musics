import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import fp from 'lodash/fp';
import styled from 'styled-components';

import { Panel, Divider } from '../../../components/core';
import Profile from '../../../containers/Profile';
import SongSmallCard from '../../../containers/SongSmallCard';
import SongCard from '../../../containers/SongCard';
import musicsFormater from '../../../selectors/utils/musicsFormater';
import withLayout from '../../../HOC/withLayout';
import withSPA from '../../../HOC/withSPA';
import * as actionCreators from '../actions';

const ProfilePageWrapper = styled.div``;

const ProfilePage = ({ className, ownerMusics, profilePageReducer, }) => {
  return (
    <ProfilePageWrapper className={cn('profile-page container-custom container mx-auto flex flex-col flex-1 animated fadeIn', className)}>
      <Profile
        ownerMusics={ownerMusics}
        profile={profilePageReducer.profile}
        isOwnerMusicsFetching={profilePageReducer.isOwnerMusicsFetching}
        isProfileFetching={profilePageReducer.isProfileFetching}
      />
      <Panel className="w-full" title={`Những bài hát khác của ${profilePageReducer.profile.name}`} icon="music-note">
        {fp.take(18)(ownerMusics).map(song => (
          <div className="w-1/3 xl:w-1/6 lg:w-1/6 md:w-1/6 p-1/2" key={song.id}>
            <SongCard
              className="w-full"
              {...song}
            />
          </div>
        ))}
      </Panel>
      <Divider className="mb-5 mt-2" />
      <Panel className="w-full" title={`Những bài hát cover liên quan`} icon="music-note">
        {fp.compose(fp.take(20), fp.reverse)(ownerMusics).map(song => (
          <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 p-1/2" key={song.id}>
            <SongSmallCard
              className="w-full"
              {...song}
            />
          </div>
        ))}
      </Panel>
      <Divider className="mb-5 mt-2" />
    </ProfilePageWrapper>
  );
};

ProfilePage.displayName = 'ProfilePage';
ProfilePage.propTypes = {};
ProfilePage.defaultProps = {};

const mapStateToProps = state => ({
  profilePageReducer: state.profilePageReducer,
  ownerMusics: musicsFormater(state.profilePageReducer.ownerMusics),
});

const ProfilePageEnhancer = compose(
  connect(mapStateToProps),
  withLayout,
)(ProfilePage);

ProfilePageEnhancer.displayName= 'ProfilePageEnhancer';

ProfilePageEnhancer.getInitialProps = async ({ query, reduxStore: store, isServer }) => {
  const callApiStack = [
    store.dispatch(actionCreators.getProfile(query.id)),
    store.dispatch(actionCreators.getOwnerMusics(query.id)),
  ];

  // in client-side await will be stop render
  if (isServer) {
    await Promise.all(callApiStack);
  }

  return {};
}

export default withSPA(ProfilePageEnhancer);
