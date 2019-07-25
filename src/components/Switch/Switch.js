import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import fp from 'lodash/fp'
import styled from 'styled-components';

const SwitchWrapper = styled.button`
  height: 1.5em;
  width: 3em;

  &.outline-none {
    outline: 0;
  }

  .ui-switch__inner {
    width: 1.5em;
  }
`;

const Switch = ({ className, color, size, onChange, ...otherProps }) => {
  const isControlled = 'checked' in otherProps;

  const [checkedState, setCheckedState] = React.useState(isControlled ? otherProps.checked : otherProps.defaultChecked);
  const switchRef = React.useRef(null);

  React.useEffect(() => {
    setCheckedState(switchRef.current.checked);
  });

  const handleChange = e => {
    setCheckedState(e.target.checked);
    onChange(e);
  };

  return (
    <SwitchWrapper
      className={cn(
        'ui-switch relative outline-none rounded-full cursor-pointer hover:shadow-lg transition-fast',
        {
          'bg-gray-300': !checkedState,
          [`bg-${color}`] : checkedState ,
          [`text-${size}`] : size,
        },
        className,
      )}
    >
      <input
        type="checkbox"
        className="w-full h-full absolute top-0 left-0 opacity-0 z-10"
        ref={switchRef}
        onChange={handleChange}
        {...otherProps}
      />
      <div
        className={cn(
          'ui-switch__inner absolute rounded-full top-0 left-0 bg-white inline-block transition-fast border-2 h-full',
          {
            [`translate-x-full border-${color}`] : checkedState,
            'border-gray-300': !checkedState,
          }
        )}
      />
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
  color: 'gray-800',
  onChange: f => f,
};

export default Switch;
