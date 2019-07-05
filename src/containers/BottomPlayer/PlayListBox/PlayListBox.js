import './PlayListBox.scss';
import cn from 'classnames';

const PlayListBox = ({ className }) => {
  return (
    <section className={cn('ui-play-list-box bg-white relative rounded-t-lg overflow-hidden', className)}>
      <div className="ui-play-list-box__bg absolute w-full h-full --bg-blur" />
      <span className="flex justify-center p-2">Play list name</span>
    </section>
  );
};

export default PlayListBox;
