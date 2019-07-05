import './MusicItem.scss';
import Link from 'next/link';
import cn from 'classnames';
import { Icon } from '../../core';

const MusicItem = ({ className, id, name, singer, src, img, onClick, isActive, isPlaying, ...otherProps }) => {
  return (
    <section {...otherProps} className={cn('ui-music-item flex items-center h-16 w-full rounded-full overflow-hidden', { 'ui-music-item--active bg-primary-blur': isActive }, className)} onClick={onClick}>
      <div className="flex cursor-pointer overflow-hidden flex-1 pl-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img
            className={cn('ui-music-item__avatar-img w-full h-full absolute', { 'animated spin faster': isActive })}
            src={img}
            alt="cureent-playing-music"
          />
          <Icon iName="pause" className={cn('absolute top-0 left-0 text-xs text-white --transform-center', { 'hidden': !isActive || !isPlaying })} />
        </div>
        <div className="flex flex-col justify-center pl-3">
          <div className="flex flex-col justify-center">
            <Link href={`/song?id=${id}`}><a className="text-teal-500 text-base hover:underline">{name}</a></Link>
            <Link href={`/singer?id=${id}`}><a className="text-white text-xs hover:underline">{singer.name}</a></Link>
          </div>
        </div>
      </div>
      <div className="flex items-center pr-6">
        <span className="text-xs text-white hidden flex items-center --hover-to-see"><Icon iName="clock" className="mr-1" /><span>04:05</span></span>
        <span className="text-xs text-white flex items-center ml-3"><Icon iName="headphones-alt" className={cn('mr-1', { 'animated infinite fast heartBeat': isActive && isPlaying })} /><span>1.231.124</span></span>
      </div>
      <div className="ui-music-item__actions hidden --hover-to-see pr-6">
        <Icon iName="thumbs-up" className="text-xs text-white hover:text-teal-500" />
        <Icon iName="heart" className="text-xs text-white ml-3 hover:text-teal-500" />
        <Icon iName="download" className="text-xs text-white ml-3 hover:text-teal-500" />
      </div>
    </section>
  );
};

export default MusicItem;
