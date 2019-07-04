import './MusicCard.scss';
import PlayButton from '../Button/PlayButton';

const MusicCard = ({ id, src, img, singer, name, isPlaying, onPlay }) => {
  const onClick = () => {
    if (!isPlaying) {
      return onPlay({ id, src, name, img, singer });
    }
  };

  return (
    <div className="ui-music-card w-48 overflow-hidden" onClick={onClick}>
      <div className="w-full relative">
        <img className="w-full h-48 rounded-full animated rotateIn cursor-pointer" src={img} alt={id} />
        {/* <PlayButton
          className="absolute bg-primary-gradient bottom-0 border-white border-solid border-4 --play-button"
          isPlaying={isPlaying} onClick={onClick}
        /> */}
      </div>
      <div className="flex flex-col items-center justify-center w-full h-24">
        <span className="text-teal-600 text-base cursor-pointer hover:underline">{name}</span>
        <span className="font-bold text-white text-xs cursor-pointer">{singer.name}</span>
      </div>
    </div>
  );
};

export default MusicCard;
