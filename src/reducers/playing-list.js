import { playlist } from '../constants/playing-list';

const musics = {
  '235fwe': {
    id: '235fwe',
    name: 'Please don\'t go',
    singer: {
      id: 'uid_edm-001',
      name: 'EDM',
    },
    src: '/static/musics/please-dont-go.mp3',
    img: '/static/img/bg-blur.jpg',
    listenNumber: 1241562,
    time: 3.6 * 60,
    imgBlur: '/static/img/bg-blur.jpg',
  },
  '12r': {
    id: '12r',
    name: 'Flay Away',
    singer: {
      id: 'uid_edm-001',
      name: 'EDM',
    },
    src: '/static/musics/fly-away.mp3',
    img: '/static/img/bg-blur.jpg',
    listenNumber: 1241562,
    time: 3.6 * 60,
    imgBlur: '/static/img/bg-blur.jpg',
  },
  'id_violin': {
    id: 'id_violin',
    name: 'Perfect cover by violin',
    singer: {
      id: 'uid_edm-001',
      name: 'EDM',
    },
    src: '/static/musics/perfect-violin.mp3',
    img: '/static/img/bg-blur.jpg',
    listenNumber: 1241562,
    time: 3.6 * 60,
    imgBlur: '/static/img/bg-blur.jpg',
  },
  'id_edm': {
    id: 'id_edm',
    name: 'EDM Bất hủ cho dân cày liên minh',
    singer: {
      id: 'uid_edm-001',
      name: 'EDM',
    },
    src: '/static/musics/edm-lol.mp3',
    img: '/static/img/bg-blur.jpg',
    listenNumber: 1241562,
    time: 3.6 * 60,
    imgBlur: '/static/img/bg-blur.jpg',
  },
  'id_001': {
    id: 'id_001',
    name: 'Sao em vô tình',
    singer: {
      id: 'uid_jack-001',
      name: 'Jack',
    },
    src: '/static/musics/sao-em-vo-tinh.mp3',
    img: '/static/img/bg-blur.jpg',
    listenNumber: 1241562,
    time: 3.6 * 60,
    imgBlur: '/static/img/bg-blur.jpg',
  },
  'id_002': {
    id: 'id_002',
    name: 'Bạc phận',
    singer: {
      id: 'uid_jack-001',
      name: 'Jack',
    },
    listenNumber: 1241562,
    time: 3.6 * 60,
    src: '/static/musics/bac-phan.mp3',
    img: '/static/img/bg-blur.jpg',
    imgBlur: '/static/img/bg-blur.jpg',
  },
  'id_003': {
    id: 'id_003',
    name: 'Hồng nhan',
    singer: {
      id: 'uid_jack-001',
      name: 'Jack',
    },
    listenNumber: 1241562,
    time: 3.6 * 60,
    src: '/static/musics/hong-nhan.mp3',
    img: '/static/img/bg-blur.jpg',
    imgBlur: '/static/img/bg-blur.jpg',
  },
  'id_004': {
    id: 'id_004',
    name: 'Lost Control',
    singer: {
      id: 'uid_walker-001',
      name: 'Alan Walker',
    },
    listenNumber: 1241562,
    time: 3.6 * 60,
    src: '/static/musics/lost-control.mp3',
    img: '/static/img/bg-blur.jpg',
    imgBlur: '/static/img/bg-blur.jpg',
  },
  'id_005': {
    id: 'id_005',
    name: 'Hãy trao cho anh',
    singer: {
      id: 'uid_tung-mtp-001',
      name: 'Sơn Tùng M-TP',
    },
    listenNumber: 1241562,
    time: 3.6 * 60,
    src: '/static/musics/hay-trao-cho-anh.mp3',
    img: '/static/img/bg-blur.jpg',
    imgBlur: '/static/img/bg-blur.jpg',
  },
  'id_006': {
    id: 'id_006',
    name: 'No Promise',
    singer: {
      id: 'uid_shayne-ward-001',
      name: 'Shayne Ward',
    },
    listenNumber: 1241562,
    time: 3.6 * 60,
    src: '/static/musics/no-promise.mp3',
    img: '/static/img/bg-blur.jpg',
    imgBlur: '/static/img/bg-blur.jpg',
  },
};

const defaultState = {
  id: 'pid_001',
  name: 'Nhạc Việt Nam nhẹ nhàng',
  loveNumber: 1984245,
  musics,
  user: {
    name: 'Nguyễn Văn Hoàng',
    id: 'uid_001',
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case playlist.CHANGE_PLAYING_LIST:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.id,
        musics: action.payload.musics || {},
        user: action.payload.user || {},
      };
    default:
      return state;
  }
};
