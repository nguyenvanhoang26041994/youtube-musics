import React from 'react';
import cn from 'classnames';
import { compose } from 'redux';
import styled from 'styled-components';
import { Slider } from '../../components/core';
import AnimationIcon from './AnimationIcon';
import withPlayingMusic from '../../HOC/withPlayingMusic';
import withPlayerActions from '../../HOC/withPlayerActions';
import usePlayer from '../../hooks/usePlayer';
import { calcTime } from '../../utils/time';
import usePlayingMusicNode from '../../hooks/usePlayingMusicNode';

const MusicControllerWrapper = styled.div``;

const MusicController = ({ className, playingMusic, playerActions }) => {
  const [node, duration, currentTime] = usePlayingMusicNode();
  return (
    <MusicControllerWrapper className={cn('ui-music-controller flex flex-col items-center', className)}>
      <div className="flex items-center text-white w-full justify-center">
        <span className="w-8 text-xs flex justify-start mx-2">{calcTime(currentTime)}</span>
        <Slider className="flex-1" percent={currentTime/duration} />
        <span className="w-8 text-xs flex justify-end mx-2">{calcTime(duration)}</span>
      </div>
      <div className="flex items-center justify-around h-24 w-full">
        <AnimationIcon name="repeat" color="white" size="lg" />
        <AnimationIcon name="step-backward" color="white" size="xs" />
        <div className="flex items-center justify-center rounded-full bg-white h-10 w-10">
          {playingMusic.isPlaying
            ? <AnimationIcon name="pause" size="sm" color="indigo-500" onClick={() => node.pause()} />
            : <AnimationIcon name="play" size="sm" color="indigo-500" className="ml-1/2" onClick={() => node.play()}/>
          }
        </div>
        <AnimationIcon name="step-forward" color="white" size="xs" />
        <AnimationIcon name="list" color="white" size="sm" />
      </div>
    </MusicControllerWrapper>
  );
};

export default compose(
  withPlayingMusic,
  withPlayerActions,
)(MusicController);
