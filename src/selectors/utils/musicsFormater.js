import musicFormater from './musicFormater';

export default musics => musics.map(music => musicFormater(music));
