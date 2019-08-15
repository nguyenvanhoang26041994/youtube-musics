import React from 'react';
import { compose } from 'redux';
import styled from 'styled-components';

import withInjectReducer from '../../HOC/withInjectReducer';
import withInjectSaga from '../../HOC/withInjectSaga';
import reducer from './reducer';
import saga from './saga';
import RankingBoard from '../RankingBoard';
import PlaylistCard from '../../components/PlaylistCard';

const HomePageWrapper = styled.div`
  &.home-page {
    .home-page__ranking {
      background-color: #414345;
    }
  }
`;

const HomePage = () => (
  <HomePageWrapper id="home-page" className="home-page container-custom container mx-auto flex">
    <div className="mb-2 w-full flex flex-col">
      <h2 className="text-teal-500 font-bold text-lg mb-2 px-2">HOT PLAYLIST</h2>
      <div className="flex w-full">
        <did className="w-1/4 p-2"><PlaylistCard className="w-full" /></did>
        <did className="w-1/4 p-2"><PlaylistCard className="w-full" /></did>
        <did className="w-1/4 p-2"><PlaylistCard className="w-full" /></did>
        <did className="w-1/4 p-2"><PlaylistCard className="w-full" /></did>
      </div>
    </div>
  </HomePageWrapper>
);

export default compose(
  withInjectSaga({ key: 'homePage', saga }),
  withInjectReducer({ key: 'homePage', reducer }),
)(HomePage);
