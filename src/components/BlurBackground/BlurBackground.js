import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Image from '../Image';

const BlurBackgroundWrapper = styled.div`
  &.ui-blur-background--custom {
    z-index: -1;

    img {
      object-fit: cover;
      filter: blur(50px) grayscale(35%) brightness(25%);
      transform: scale(1.2, 1.2);
    }
  }
`;

const BlurBackground = ({ className, img, ...otherProps }) => {
  return (
    <BlurBackgroundWrapper className={cn('ui-blur-background ui-blur-background--custom w-full h-full object-cover overflow-hidden absolute', className)}>
      <Image src={img} className="w-full h-full" {...otherProps} />
    </BlurBackgroundWrapper>
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
