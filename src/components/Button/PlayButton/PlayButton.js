import './PlayButton.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../../core';

const PlayButton = ({ className, isPlaying, ...otherProps }) => (
  <button className={cn('ui-play-button flex justify-center outline-none rounded-full bg-blue-500 h-12 w-12', className)} {...otherProps}>
    {isPlaying
      ? <Icon iName="pause" className="text-base text-blue-500" />
      : <Icon iName="play" className="text-base text-white" />
    }
  </button>
);

PlayButton.displayName = 'PlayButton';
PlayButton.propTypes = {
  className: PropTypes.string,
  isPlaying: PropTypes.bool,
};
PlayButton.defaultProps = {
  isPlaying: false,
};

export default PlayButton;
