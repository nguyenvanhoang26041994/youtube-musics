import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import tailwindColors from '../../utils/tailwindColors';

const Wrapper = styled.div`
  &.ui-topic--active {
    &:before {
      content: " ";
      height: 1.25rem;
      width: 1.25rem;
      position: absolute;
      overflow: hidden;
      z-index: 1;
      border-width: 1.25rem;
      top: 50%;
      left: 0%;
      border-color: transparent transparent transparent${tailwindColors['gray-100']};
      transform: translate(0, -50%);
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
