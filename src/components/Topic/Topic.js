import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Topic = ({ className, color, children }) => {
  return (
    <Wrapper className={cn(`ui-topic flex items-center justify-center cursor-pointer h-24 bg-${color}`, className)}>
      {children}
    </Wrapper>
  );
};

export default Topic;
