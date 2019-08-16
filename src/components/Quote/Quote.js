import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from 'styled-components';

const QuoteWrapper = styled.div``;

const Quote = ({ className, children, author }) => {
  return (
    <QuoteWrapper className={cn('ui-qoute flex flex-col font-lovers-quarrel', className)}>
      <q>{children}</q>
      <div className="flex justify-end">--{author}--</div>
    </QuoteWrapper>
  );
};

Quote.displayName = 'Quote';
Quote.propTypes = {};
Quote.defaultProps = {};

export default Quote;
