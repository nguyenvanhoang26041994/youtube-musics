import cn from 'classnames';
import PropTypes from 'prop-types';

const sizes = Object.freeze({
  small: 'text-xs',
  large: 'text-lg',
});

const colors = Object.freeze({
  primary: 'text-blue-500',
});

const Icon = ({ className, iName, size, color, otherProps }) => (
  <span
    className={cn(
      `ui-icon fa fa-${iName}`,
      sizes[size],
      colors[color],
      className)
    }
    {...otherProps}
  />
);

Icon.displayName = 'Icon';
Icon.propTypes = {
  className: PropTypes.string,
  iName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors)),
};
Icon.defaultProps = {};

export default Icon;
