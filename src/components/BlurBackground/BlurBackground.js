import './BlurBackground.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const BlurBackground = ({ className, img, ...otherProps }) => {
  return (
    <div className={cn('ui-blur-background w-full h-full bg-cover bg-no-repeat bg-fixed absolute bottom-0', className)} {...otherProps}>
      <style jsx>{`
        .ui-blur-background {
          background-image: url('${img}');
          // filter: blur(3px) grayscale(80%) brightness(80%) opacity(95%);
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

BlurBackground.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
};
BlurBackground.defaultProps = {
  img: '/static/img/bg-blur.jpg',
};

export default BlurBackground;
