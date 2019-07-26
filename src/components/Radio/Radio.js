import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import tailwindColors from '../../utils/tailwindColors';

const RadioWrapper = styled.div`
  .outline-none {
    outline: 0;
  }

  &.ui-radio {
    height: 1.5em;
    width: 1.5em;
  }

  .ui-radio__inner {
    width: 1.5em;
  }

  .ui-radio__radio {
    &:checked {
      + .ui-radio__wrapper {
        border-color: ${props => tailwindColors[props.color]};
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const Radio = ({ className, color, size, ...otherProps }) => {
  return (
    <RadioWrapper className={cn('ui-radio relative flex rounded-full hover:shadow-lg', { [`text-${size}`] : size }, className)} color={color}>
      <input
        type="radio"
        className="ui-radio__radio w-full h-full absolute top-0 left-0 opacity-0 z-10 cursor-pointer"
        {...otherProps}
      />
      <button className="ui-radio__wrapper w-full h-full relative outline-none rounded-full bg-transparent border-2 transition-fast">
        
      </button>
    </RadioWrapper>
  );
}

Radio.displayName = 'Radio';
Radio.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
};
Radio.defaultProps = {
  size: 'base',
  color: 'green-400',
  onChange: f => f,
};

export default Radio;
