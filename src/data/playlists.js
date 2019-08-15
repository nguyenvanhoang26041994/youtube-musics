import fp from 'lodash/fp';
import musics, { musicsAsObject } from './musics';

const musics_002 = [
  musicsAsObject['Tv6WImqSuxA'],
  musicsAsObject['SvRFNNbxuAk'],
  musicsAsObject['u1I9ITfzqFs'],
  musicsAsObject['fB8TyLTD7EE'],
  musicsAsObject['RfXLyP2_XbA'],
  musicsAsObject['vBGiFtb8Rpw'],
];

const musics_003 = [
  musicsAsObject['j4zP5saRZqg'],
  musicsAsObject['afNQLlTRvfM'],
];

const musics_004 = [
  musicsAsObject['fB8TyLTD7EE'],
  musicsAsObject['kXYiU_JCYtU'],
  musicsAsObject['IgCphQCkHSk'],
  musicsAsObject['50VNCymT-Cs'],
];

const playlists = [
  {
    id: 'playlist-001',
    name: 'Nhạc cực hay mọi thể loại tuyển chọn',
    musics,
    listenCount: fp.sumBy(music => music.listenCount)(musics),
    user: {
      name: 'Nguyễn Văn Hoàng',
      id: 'uid_001',
    },
  },
  {
    id: 'playlist-002',
    name: 'Nhạc EDM chọn lọc',
    listenCount: fp.sumBy(music => music.listenCount)(musics_002),
    musics: musics_002,
    user: {
      name: 'BOSS ADMIN',
      id: 'admin',
    },
  },
  {
    id: 'playlist-003',
    name: 'Nhạc Việt siêu thấm',
    listenCount: fp.sumBy(music => music.listenCount)(musics_003),
    musics: musics_003,
    user: {
      name: 'BOSS ADMIN',
      id: 'admin',
    },
  },
  {
    id: 'playlist-004',
    name: 'Siêu khủng khiếp',
    listenCount: fp.sumBy(music => music.listenCount)(musics_004),
    musics: musics_004,
    user: {
      name: 'BOSS ADMIN',
      id: 'admin',
    },
  }
];

const playlistsAsObject = {};

playlists.map(playlist => {
  playlistsAsObject[playlist.id] = playlist;
});

export default playlists;
export { playlistsAsObject };
