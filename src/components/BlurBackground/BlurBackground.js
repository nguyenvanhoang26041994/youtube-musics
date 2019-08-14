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
  img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
};

export default BlurBackground;
