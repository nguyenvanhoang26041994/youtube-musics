import React, { useState, useEffect, useMemo } from 'react';
import cn from 'classnames';
import fp from 'lodash/fp';
import styled from 'styled-components';

import { Icon, Divider, Carousel, Panel } from '../../../components/core';
import Topic from '../../../components/Topic';
import SongSmallCard from '../../../containers/SongSmallCard';
import tailwindColors from '../../../utils/tailwindColors';

const Wrapper = styled.div``;
const SongSmallCardStyled = styled(SongSmallCard)`
  .ui-song-small-card__name,
  .ui-song-small-card__actions .ui-svg-icon {
    ${props => props.customColor ? `color: ${tailwindColors[props.customColor]}` : ''}
  }
`;

const Topics = ({ className, topicMusics, topics, getTopicMusics }) => {
  const initialTopic = useMemo(() => topics[0] ? topics[0].id : '', []);
  const [activeTopic, setActiveTopic] = useState(initialTopic);

  const customColor = useMemo(
    () => fp.find(topic => topic.id === activeTopic, topics).color,
    [activeTopic]
  );

  useEffect(() => {
    if (initialTopic !== activeTopic || !topicMusics.length) {
      getTopicMusics(activeTopic);
    }
  }, [activeTopic]);

  return (
    <Wrapper className={cn('w-full flex', className)}>
      <div className="w-8/12 flex flex-col">
        <Panel className="w-full" title="Nhạc Theo Chủ Đề" icon="music-note">
          {fp.take(20)(topicMusics).map(song => (
            <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 p-1/2" key={song.id}>
              <SongSmallCardStyled
                className="w-full"
                customColor={customColor}
                {...song}
              />
            </div>
          ))}
        </Panel>
      </div>
      <div className="w-4/12 flex flex-col ml-2">
        <Panel className="w-full" title="Chủ Đề" icon="music-note">
          <div className="w-full flex flex-col mt-1/2">
            {topics.map(topic => (
              <Topic
                color={`${topic.color} mb-1`}
                active={activeTopic === topic.id}
                key={topic.id} onClick={() => setActiveTopic(topic.id)}
              >
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
