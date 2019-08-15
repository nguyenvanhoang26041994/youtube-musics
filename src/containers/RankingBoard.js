import withPlayingList from '../HOC/withPlayingList';
import RankingBoard from '../components/RankingBoard';

const RankingBoardEnhancer = ({ playingList, ...otherProps}) => <RankingBoard {...otherProps} musics={playingList.musics} />;

export default withPlayingList(RankingBoardEnhancer);
