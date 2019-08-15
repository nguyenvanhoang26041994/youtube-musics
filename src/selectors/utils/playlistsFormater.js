import playlistFormater from './playlistFormater';

export default playlists => playlists.map(playlist => playlistFormater(playlist));
