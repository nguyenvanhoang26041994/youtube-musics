import './BlurBackground.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const BlurBackground = ({ className, img, ...otherProps }) => {
  return (
    <div className={cn('ui-blur-background ui-blur-background--custom w-full h-full object-cover overflow-hidden absolute', className)}>
      <img src={img} className="w-full h-full object-cover" {...otherProps} />
    </div>
  );
};

BlurBackground.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
};
BlurBackground.defaultProps = {
  img: '/static/img/player-bg.jpg',
};

export default BlurBackground;
