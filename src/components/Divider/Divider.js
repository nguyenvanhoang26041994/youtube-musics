import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const DividerWrapper = styled.div`
  &.ui-divider {
    position: relative;
    height: 1px;
    
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 5%;
      right: 5%;
      width: 90%;
      height: 1px;
      background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
    }
  }
`;

const Divider = ({ className }) => (
  <DividerWrapper className={cn('ui-divider', className)} />
);

export default Divider;
