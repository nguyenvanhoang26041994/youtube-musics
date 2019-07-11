import './VolumeGif.scss';
import cn from 'classnames';

const VolumeGif = ({ className }) => {
  return (
    <img src="/static/img/equalizer.gif" className={cn('h-8 w-8', className)} />
  );
};

export default VolumeGif;
