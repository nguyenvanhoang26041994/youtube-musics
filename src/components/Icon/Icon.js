import icons from './svg';
import cn from 'classnames';
import PropTypes from 'prop-types';

const sizes = Object.freeze({
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  base: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-12 w-12',
  '4xl': 'h-16 w-16',
  '5xl': 'h-20 w-20',
});

const Icon = ({ className, name, size, color, iconRef, ...otherProps }) => {
  const I = icons[name] || (() => null);

  return (
    <div
      className={cn(
      `ui-svg-icon icon-${name} inline-block cursor-pointer text-${color}`,
      sizes[size],
      className
      )}
      ref={iconRef}
      {...otherProps}
    >
      <I className="fill-current w-full h-full" />
    </div>
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.string,
};
Icon.defaultProps = {
  size: 'base',
  color: 'white',
};

export default Icon;
