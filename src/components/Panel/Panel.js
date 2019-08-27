import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Icon } from '../../components/core';

const PanelWrapper = styled.section``;

const Panel = ({ className, title, children }) => (
  <PanelWrapper className={cn('flex flex-col rounded', className)}>
    <h2 className="flex items-center justify-between m-1">
      <span className="text-indigo-500 font-bold text-lg">{title}</span>
    </h2>
    <div className="flex w-full flex-wrap">
      {children}
    </div>
  </PanelWrapper>
);

export default Panel;
