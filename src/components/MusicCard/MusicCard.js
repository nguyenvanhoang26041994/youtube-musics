import './MusicCard.scss';
import PlayButton from '../Button/PlayButton';

const MusicCard = ({ id, src, img, singer, name, isPlaying, onPlay }) => {
  const onClick = () => {
    if (!isPlaying) {
      return onPlay({ id, src, name, singer });
    }
  };

  return (
    <div className="ui-music-card w-48 overflow-hidden rounded-lg shadow-2xl">
      <div className="w-full relative">
        <img className="w-full h-48" src={img} alt={id} />
        <PlayButton
          className="absolute bg-primary-gradient bottom-0 border-white border-solid border-4 --play-button"
          isPlaying={isPlaying} onClick={onClick}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-white h-32">
        <span className="text-teal-600 text-base">{name}</span>
        <span className="font-bold text-xs">{singer.name}</span>
      </div>
    </div>
  );
};

export default MusicCard;
