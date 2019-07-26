import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';

import tailwindColors from '../../utils/tailwindColors';

const CheckboxWrapper = styled.div`
  .outline-none {
    outline: 0;
  }

  .ui-checkbox__inner {
    width: 1.5em;
  }

  &.ui-checkbox {
    height: 1.5em;
    width: 1.5em;

    &:hover {
      .ui-checkbox__wrapper {
        border-color: ${props => tailwindColors[props.color]};
      }
    }
  }

  .ui-checkbox__checkbox {
    &:checked {
      + .ui-checkbox__wrapper {
        border-color: ${props => tailwindColors[props.color]};

        .ui-checkbox__checked-mark {
          display: flex;
        }
      }
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const Checkbox = ({ className, color, size, ...otherProps }) => {
  return (
    <CheckboxWrapper className={cn('ui-checkbox relative flex rounded-sm hover:shadow-lg', { [`text-${size}`] : size }, className)} color={color}>
      <input
        type="checkbox"
        className="ui-checkbox__checkbox w-full h-full absolute top-0 left-0 opacity-0 z-10 cursor-pointer"
        {...otherProps}
      />
      <button className="ui-checkbox__wrapper w-full h-full relative outline-none rounded-sm bg-transparent border-2 transition-fast">
        <Icon name="checked" color={color} className="ui-checkbox__checked-mark hidden absolute absolute-center" />
      </button>
    </CheckboxWrapper>
  );
};

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  size: 'base',
  color: 'green-400',
  onChange: f => f,
};

export default Checkbox;
