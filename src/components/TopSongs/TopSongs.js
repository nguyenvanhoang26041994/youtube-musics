import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import fp from 'lodash/fp';
import SongItem from './SongItem';
import { Divider, Button } from '../../components/core';
import usePlayer from '../../hooks/usePlayer';

const Wrapper = styled.div``;
const TopSongsWrapper = styled.div``;
const TopSongs = ({ className, musics }) => {
  const { playMusic } = usePlayer();

  return (
    <Wrapper className={cn('ui-top-songs flex flex-col', className)}>
      <h2 className="flex items-center text-indigo-500 font-bold text-lg my-1">
        Bảng Xếp Hạng
      </h2>
      <div className="flex-1 mt-1/2">
        <TopSongsWrapper className={cn('flex flex-col')}>
          <div className="flex w-full">
            <Button className="w-1/3 text-white" color="indigo-400">Tuần</Button>
            <Button className="w-1/3 text-indigo-500" color="gray-200">Tháng</Button>
            <Button className="w-1/3 text-indigo-500" color="gray-200">Quý</Button>
          </div>
          {fp.take(15, musics).map((music, idx) => (
            <div key={music.id} className="p-1/2 w-full">
              <SongItem {...music} rank={idx + 1} onClick={() => playMusic(music)} />
              <Divider />
            </div>
          ))}
        </TopSongsWrapper>
      </div>
    </Wrapper>
  );
};

export default TopSongs;
