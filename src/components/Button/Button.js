import './Button.scss';
import cn from 'classnames';

const Button = ({ className, children, ...otherProps }) => {
  return (
    <button className={cn('ui-button', className)} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
