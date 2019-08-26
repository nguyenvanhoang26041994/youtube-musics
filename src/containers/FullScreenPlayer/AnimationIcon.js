import React, { useState } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import Icon from '../../components/Icon';

const AnimationIconWrapper = styled.div`
`;

const AnimationIcon = props => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <AnimationIconWrapper
      className={cn('flex items-center justify-center rounded-full h-10 w-10 transition-fast', { 'bg-indigo-400': isMouseEnter })}
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
    >
      <Icon {...props} />
    </AnimationIconWrapper>
  );
};

export default AnimationIcon;
