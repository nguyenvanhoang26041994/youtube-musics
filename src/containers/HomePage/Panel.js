import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const PanelWrapper = styled.section``;

const Panel = ({ className, title, children }) => (
  <PanelWrapper className={cn('w-full flex flex-col', className)}>
    <h2 className="text-teal-500 font-bold text-lg mb-2 px-2">{title}</h2>
    <div className="flex w-full flex-wrap">
      {children}
    </div>
  </PanelWrapper>
);

export default Panel;
