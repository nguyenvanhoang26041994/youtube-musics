import React, { useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Icon, Image, Slider, Button } from '../../components/core';

import usePlayingMusic from '../../hooks/usePlayingMusic';
import usePlayingList from '../../hooks/usePlayingList';
import usePlayingMusicNode from '../../hooks/usePlayingMusicNode';
import usePlayer from '../../hooks/usePlayer';

import { mode } from '../../constants/playing-list';
import { calcTime } from '../../utils/time';

const Wrapper = styled.div``;
const ControlWrapper = styled.div``;
const InforWrapper = styled.div``;
const OtherControlWrapper = styled.div``;
const ExtendWrapper = styled.div``;

const modes = Object.freeze({
  [mode.REPEAT]: 'repeat-1-alt',
  [mode.LOOP]: 'repeat-alt',
  [mode.SHUFFLE]: 'random',
  [mode.ONCE]: 'heart',
});

const CircleIcon = props => {
  return (
    <div className="flex items-center justify-center rounded-full bg-white h-10 w-10">
      <Icon {...props} />
    </div>
  );
};

const MiniPlayer = ({ className, toggleExpanded, miniPlayerRef }) => {
  const [playingMusic] = usePlayingMusic();
  const [node, duration, currentTime] = usePlayingMusicNode();
  const [playingList, playingListActions] = usePlayingList();
  const { goNextSong, goPrevSong } = usePlayer();

  const currentTimeFormat = useMemo(() => calcTime(currentTime), [currentTime]);
  const durationFormat = useMemo(() => calcTime(duration), [duration]);

  return (
    <Wrapper className={cn('flex items-center h-16 w-full', className)} ref={miniPlayerRef}>
      <ControlWrapper className="flex justify-between items-center w-2/12">
        <Icon name="step-backward" color="white" onClick={goPrevSong} />
        {!playingMusic.isPlaying && <CircleIcon name="play" color="indigo-400" onClick={() => node.play()} />}
        {playingMusic.isPlaying && <CircleIcon name="pause" color="indigo-400" onClick={() => node.pause()} />}
        <Icon name="step-forward" color="white" onClick={goNextSong} />
        <Icon name={modes[playingList.mode]} color="white" onClick={playingListActions.changeToNextMode} />
      </ControlWrapper>
      <InforWrapper className="flex w-6/12 mx-10">
        <Image className="h-12 w-12 mr-3" src={playingMusic.img} />
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-white text-sm">{playingMusic.name}</div>
              <span className="mx-2 text-gray-500 text-xs">–</span>
              <div className="text-gray-500 text-xs">{playingMusic.singersName}</div>
            </div>
            <div className="font-mono text-2xs flex items-center">
              <span className="text-white ">{currentTimeFormat}</span>
              <span className="mx-1 text-gray-500">/{durationFormat}</span>
            </div>
          </div>
          <Slider className="w-full" percent={currentTime/duration} onChange={(e, { value }) => { node.currentTime = value * duration; }}/>
        </div>
      </InforWrapper>
      <OtherControlWrapper className="flex w-1/12 items-center justify-between">
        <Icon name="volume" color="white" />
        <Icon name="heart" color="white" />
        <Icon name="ellipsis-h" color="white" />
      </OtherControlWrapper>
      <ExtendWrapper className="flex w-3/12 items-center justify-end">
        <Button color="indigo-500" className="rounded-sm text-white" onClick={toggleExpanded}>
          <Icon name="list-alt" className="mr-2" />
          <span className="text-sm">Danh sách phát</span>
        </Button>
      </ExtendWrapper>
    </Wrapper>
  );
};

export default MiniPlayer;
