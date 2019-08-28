import React, { useState } from 'react';
import cn from 'classnames';
import fp from 'lodash/fp';
import styled from 'styled-components';

import { Icon, Divider, Carousel, Panel } from '../../../components/core';
import Topic from '../../../components/Topic';
import SongSmallCard from '../../../components/SongSmallCard';
import tailwindColors from '../../../utils/tailwindColors';

const _topics = [
  { id: '001', name: 'Nhạc Hay Tuyển Chọn', color: 'yellow-500' },
  { id: '002', name: 'Nhạc Nhẹ', color: 'blue-500' },
  { id: '003', name: 'Nhạc Cover', color: 'teal-500' },
  { id: '004', name: 'Nhạc EDM', color: 'red-500' },
  { id: '005', name: 'Nhạc Thất Tình', color: 'indigo-500' },
];

const topicsAsObject = fp.reduce((rs, topic) => {
  rs[topic.id] = topic;
  return rs;
}, {})(_topics);

const Wrapper = styled.div``;
const SongSmallCardStyled = styled(SongSmallCard)`
  .ui-song-small-card__name {
    color: ${props => tailwindColors[topicsAsObject[props.activeTopic].color]};
  }
`;

const Topics = ({ className, loaders, trendingSongs, playMusic }) => {
  const topics = _topics;
  const [activeTopic, setActiveTopic] = useState('001');

  return (
    <Wrapper className={cn('w-full flex', className)}>
      <div className="w-8/12 flex flex-col">
        <Panel className="w-full" title="Nhạc theo chủ đề" icon="music-note">
          {!loaders.isTrendingSongsFetching && fp.compose(fp.take(20), fp.reverse)(trendingSongs).map(song => (
            <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 p-1/2" key={song.id}>
              <SongSmallCardStyled
                className="w-full"
                activeTopic={activeTopic}
                onClick={() => playMusic(song)}
                {...song}
              />
            </div>
          ))}
        </Panel>
      </div>
      <div className="w-4/12 flex flex-col ml-1">
        <Panel className="w-full" title="Chủ Đề" icon="music-note">
          <div className="w-full flex flex-col mt-1/2">
            {topics.map(topic => (
              <Topic color={`${topic.color} mb-1`} key={topic.id} onClick={() => setActiveTopic(topic.id)}>
                <div className="text-white text-xl">{topic.name}</div>
              </Topic>
            ))}
          </div>
        </Panel>
      </div>
    </Wrapper>
  );
};

export default Topics;
