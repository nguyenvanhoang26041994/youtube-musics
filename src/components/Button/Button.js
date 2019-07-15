import './Button.scss';
import cn from 'classnames';

const Button = ({ className, children, ...otherProps }) => {
  return (
    <button className={cn('ui-button flex items-center justify-center', className)} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
