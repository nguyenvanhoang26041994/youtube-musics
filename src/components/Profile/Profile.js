import React from 'react';
import cn from 'classnames';
import fp from 'lodash/fp';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image, Icon, Button, Quote } from '../../components/core';
import MusicCard from '../../containers/MusicCard';
import MusicCardSkeleton from '../../components/MusicCard/Skeleton';

const defaultPropfile = {
  id: 'unknown',
  name: 'Unknown',
  qoute: {},
  coverImg: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
  avatarImg: 'https://img.icons8.com/bubbles/2x/user.png',
  displayRole: 'Unknown',
}

const ProfileWrapper = styled.div``;
const SingerSoftInfoWrapper = styled.div``;
const WallpaperWrapper = styled.div`
  .--cover-background {
    img {
      filter: blur(2px) grayscale(50%) brightness(50%);;
      transition: 0.5s;
    }
  }

  &:hover {
    .--cover-background {
      img {
        filter: none;
        transform: scale(1.1, 1.1);
      }
    }
  }
`;
const ProfileHeadWrapper = styled.div``;
const ProfileBobyWrapper = styled.div``;

const Profile = ({ className, ownerMusics, isOwnerMusicsFetching, profile, isProfileFetching, onPlayOwnerMusics, isPlaylistPlaying, playingMusic }) => {
  return (
    <ProfileWrapper className={cn('ui-profile w-full', className)}>
      <ProfileHeadWrapper className="ui-profile__head flex flex-col">
        <WallpaperWrapper className="h-72 relative flex flex-col justify-end">
          <Image src={profile.coverImg || defaultPropfile.coverImg} className="--cover-background w-full h-full absolute top-0 left-0 z-m1" />
          <Quote className="text-white text-2xl absolute top-haft right-0 p-2" author={profile.qoute.author}>
            {profile.qoute.text}
          </Quote>
          <div className="flex justify-end m-2">
            {!isPlaylistPlaying && (
              <Button color="teal-400" className="rounded-full text-white" onClick={onPlayOwnerMusics}>PLAY HIM MUSIC</Button>
            )}
            <Button color="teal-400" className="rounded-full text-white ml-2">
              <Icon name="ellipsis-h" />
            </Button>
          </div>
        </WallpaperWrapper>
        <div className="h-10 flex relative">
          <SingerSoftInfoWrapper className="absolute left-0 bottom-haft flex ml-5">
            <Image
              className="rounded-full w-32 h-32 cursor-pointer"
              src={profile.avatarImg || defaultPropfile.avatarImg}
            />
            <div className="flex flex-col justify-center ml-5">
              <div className="text-white text-3xl font-lovers-quarrel">
                {profile.name || defaultPropfile.name}
                {profile.isVerified && <Icon name="verified" size="sm" color="teal-400" className="ml-3" />}
              </div>
              <div className="text-teal-400 text-xs">{profile.displayRole || defaultPropfile.displayRole}</div>
            </div>
          </SingerSoftInfoWrapper>
        </div>
      </ProfileHeadWrapper>
      <ProfileBobyWrapper>
        <div className="flex flex-wrap">
          {!isOwnerMusicsFetching && ownerMusics.map(music => (
            <div className="w-1/5 p-1" key={music.id}>
              <MusicCard
                className="w-full"
                {...music}
              />
            </div>
          ))}
          {isOwnerMusicsFetching && fp.times(String, 10).map(idx => (
            <div className="w-1/5 p-1" key={idx}>
              <MusicCardSkeleton className="w-full" />
            </div>
          ))}
        </div>
      </ProfileBobyWrapper>
    </ProfileWrapper>
  );
};

Profile.displayName = 'Profile';
Profile.propTypes = {
  profile: PropTypes.object,
  ownerMusics: PropTypes.array,
  onPlayOwnerMusics: PropTypes.func,
  playingMusic: PropTypes.object,
};
Profile.defaultProps = {
  profile: {
    qoute: {},
  },
  playingMusic: {},
  ownerMusics: [],
  onPlayOwnerMusics: f => f,
};

export default Profile;
