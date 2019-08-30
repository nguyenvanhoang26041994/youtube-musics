import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { Icon } from '../../../../components/core';
import MusicItem from './MusicItem';

import usePlayingList from '../../../../hooks/usePlayingList';

const Wrapper = styled.div``;
const TopHandlerWrapper = styled.div``;
const MainListWrapper = styled.div`
  .--music-item:hover,
  .--music-item:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

const ListMusic = ({ className }) => {
  const [playingList] = usePlayingList();

  return (
    <Wrapper className={cn('flex flex-col', className)}>
      <div className="flex flex-col">
        <div className="h-10" />
        <TopHandlerWrapper className="flex items-center justify-start px-2 py-5">
          <div className="text-white text-sm">DANH SÁCH PHÁT</div>
        </TopHandlerWrapper>
      </div>
      <div className="w-full flex-1">
        <MainListWrapper className="flex flex-col h-full overflow-scroll">
          {playingList.musics.map((music, idx) => (
            <MusicItem
              className="px-2 --music-item" key={music.id}
              {...music} orderText={idx + 1}
            />
          ))}
        </MainListWrapper>
      </div>
      <div className="h-48 w-full">
        
      </div>
    </Wrapper>
  );
};

export default ListMusic;
