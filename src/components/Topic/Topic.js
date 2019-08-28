import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import tailwindColors from '../../utils/tailwindColors';

const Wrapper = styled.div`
  &.ui-topic--active {
    &:before {
      content: " ";
      height: 2.5rem;
      width: 2.5rem;
      position: absolute;
      border-radius: 100rem;
      top: 50%;
      left: 0;
      background-color: ${tailwindColors['gray-100']};
      transform: translate(-50%, -50%);
    }
  }
`;

const Topic = ({ className, color, children, active, ...otherProps }) => {
  return (
    <Wrapper className={cn(`ui-topic relative flex items-center justify-center cursor-pointer h-24 bg-${color}`, { 'ui-topic--active' : active }, className)} {...otherProps}>
      {children}
    </Wrapper>
  );
};

export default Topic;
