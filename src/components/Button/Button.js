import './Button.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const rounds = Object.freeze({
  rounded: 'rounded',
  none: 'rounded-none',
  sm: 'rounded-sm',
  lg: 'rounded-lg',
  full: 'rounded-full',
});

const specialColors = Object.freeze({
  'black': true,
  'white': true,
});

const Button = ({ className, children, color, size, round, type, ...otherProps }) => {
  return (
    <button
      className={cn(
        `ui-button flex items-center justify-center border px-4 outline-none`,
        `text-${size}`,
        rounds[round],
        {
          [specialColors[color]
            ? `border-${color} text-${color}`
            : `border-${color}-500 hover:border-${color}-400 text-${color}-500 hover:text-${color}-400`]: type === 'ghost',
          [specialColors[color]
            ? `border-${color} bg-${color}`
            : `border-${color}-500 hover:border-${color}-400 bg-${color}-500 hover:bg-${color}-400`]: type === 'default',
        },
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  round: PropTypes.string,
  type: PropTypes.string,
};
Button.defaultProps = {
  color: 'black',
  size: 'base',
  round: 'rounded',
  type: 'default',
};

export default Button;
