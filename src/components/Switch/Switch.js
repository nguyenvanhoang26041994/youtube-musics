import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import tailwindColors from '../../utils/tailwindColors';

const SwitchWrapper = styled.div`
  .outline-none {
    outline: 0;
  }

  &.ui-switch {
    height: 1.5em;
    width: 3em;
  }

  .ui-switch__inner {
    width: 1.5em;
    border-width: 0.15em;
  }

  .ui-switch__checkbox {
    &:checked {
      + .ui-switch__wrapper {
        background-color: ${props => tailwindColors[props.color]};

        .ui-switch__inner {
          border-color: ${props => tailwindColors[props.color]};
          transform: translateX(100%);
        }
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const Switch = ({ className, color, size, ...otherProps }) => {
  return (
    <SwitchWrapper className={cn('ui-switch relative flex rounded-full hover:shadow-lg', { [`text-${size}`] : size }, className)} color={color}>
      <input
        type="checkbox"
        className="ui-switch__checkbox w-full h-full absolute top-0 left-0 opacity-0 z-10 cursor-pointer"
        {...otherProps}
      />
      <button className="ui-switch__wrapper w-full h-full relative outline-none rounded-full bg-gray-300 transition-fast">
        <div className="ui-switch__inner absolute rounded-full top-0 left-0 bg-white inline-block transition-fast border-gray-300 h-full" />
      </button>
    </SwitchWrapper>
  );
}

Switch.displayName = 'Switch';
Switch.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  size: 'base',
  color: 'green-400',
  onChange: f => f,
};

export default Switch;
