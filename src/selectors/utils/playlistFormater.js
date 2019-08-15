import fp from 'lodash/fp';
import musicsFormater from './musicsFormater';

export default playlist => ({
  ...playlist,
  listenCount: fp.sumBy(music => music.listenCount)(playlist.musics),
  musics: musicsFormater(playlist.musics),
});
