import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../../../components/core';
import MusicItem from './MusicItem';

import usePlayingList from '../../../../hooks/usePlayingList';

const Wrapper = styled.div``;
const TopHandlerWrapper = styled.div``;
const MainListWrapper = styled.div``;

const ListMusic = ({ className }) => {
  const [playingList] = usePlayingList();

  return (
    <Wrapper className={cn('flex flex-col', className)}>
      <div className="h-20" />
      <div className="flex flex-col">
        <TopHandlerWrapper className="flex items-center justify-between px-2 h-16">
          <div className="text-white text-sm">DANH SÁCH PHÁT</div>
          <div className="flex items-center">
            <Icon name="search" color="white" />
          </div>
        </TopHandlerWrapper>
      </div>
      <MainListWrapper className="flex flex-col">
        {playingList.musics.map((music, idx) => (
          <MusicItem className="px-2" key={music.id} {...music} orderText={idx + 1} />
        ))}
      </MainListWrapper>
    </Wrapper>
  );
};

export default ListMusic;
