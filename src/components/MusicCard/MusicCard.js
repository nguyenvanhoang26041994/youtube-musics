import './MusicCard.scss';
import PlayButton from '../Button/PlayButton';

const MusicCard = ({ id, src, img, singer, name, isPlaying, onPlay }) => {
  const onClick = () => {
    if (!isPlaying) {
      return onPlay({ id, src, name, img, singer });
    }
  };

  return (
    <div className="ui-music-card w-32 overflow-hidden" onClick={onClick}>
      <div className="flex justify-center w-full relative">
        <img className="w-32 h-32 rounded-full animated rotateIn cursor-pointer" src={img} alt={id} />
      </div>
      <div className="flex flex-col items-center w-full h-24 mt-2">
        <span className="text-teal-600 text-base cursor-pointer text-center hover:underline">{name}</span>
        <span className="text-white text-xs text-center cursor-pointer mt-2">{singer.name}</span>
      </div>
    </div>
  );
};

export default MusicCard;
