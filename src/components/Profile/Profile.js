import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image, Icon, Button, Quote } from '../../components/core';
import MusicCard from '../../containers/MusicCard';

const ProfileWrapper = styled.div``;
const SingerSoftInfoWrapper = styled.div``;
const WallpaperWrapper = styled.div``;
const ProfileHeadWrapper = styled.div``;
const ProfileBobyWrapper = styled.div``;

const Profile = ({ className, musics }) => {
  return (
    <ProfileWrapper className={cn('ui-profile w-full', className)}>
      <ProfileHeadWrapper className="ui-profile__head flex flex-col">
        <WallpaperWrapper className="h-72 relative flex flex-col justify-end">
          <Image src="https://musically.com/wp-content/uploads/2017/01/ed-sheeran-1500x500.jpg" className="w-full h-full absolute top-0 left-0 z-m1" />
          <Quote className="text-white text-2xl absolute top-haft right-0 p-2" author="Helen Keller">
            Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same
          </Quote>
          <div className="flex justify-end m-2">
            <Button color="teal-400" className="rounded-full text-white">PLAY HIM MUSIC</Button>
            <Button color="teal-400" className="rounded-full text-white ml-2">
              <Icon name="ellipsis-h" />
            </Button>
          </div>
        </WallpaperWrapper>
        <div className="h-10 flex relative">
          <SingerSoftInfoWrapper className="absolute left-0 bottom-haft flex ml-5">
            <Image
              className="rounded-full w-32 h-32 cursor-pointer"
              src="https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_1700,q_auto:eco,w_1133/https://inews.co.uk/wp-content/uploads/2018/09/Ed-Sheeran-credit-Mark-Surridge.jpg"
            />
            <div className="flex flex-col justify-center ml-5">
              <div className="text-white text-3xl">
                Ed Sheeran
                <Icon name="verified" size="2xl" color="teal-400" className="ml-3" />
              </div>
              <div className="text-teal-400 text-sm">Famous singer</div>
            </div>
          </SingerSoftInfoWrapper>
        </div>
      </ProfileHeadWrapper>
      <ProfileBobyWrapper>
        <div className="flex flex-wrap">
          {musics.map(music => (
            <div className="w-1/5 p-2" key={music.id}>
              <MusicCard
                className="w-full"
                {...music}
              />
            </div>
          ))}
        </div>
      </ProfileBobyWrapper>
    </ProfileWrapper>
  );
};

Profile.displayName = 'Profile';
Profile.propTypes = {};
Profile.defaultProps = {};

export default Profile;
