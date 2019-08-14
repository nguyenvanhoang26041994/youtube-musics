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
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    listenNumber: 1241562,
    time: 5.6 * 60,
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
  '12r': {
    id: '12r',
    name: 'Flay Away',
    singer: {
      id: 'uid_edm-001',
      name: 'EDM',
    },
    src: '/static/musics/fly-away.mp3',
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    listenNumber: 1241562,
    time: 2.6 * 60,
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
  'id_violin': {
    id: 'id_violin',
    name: 'Perfect cover by violin',
    singer: {
      id: 'uid_edm-001',
      name: 'EDM',
    },
    src: '/static/musics/perfect-violin.mp3',
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    listenNumber: 1241562,
    time: 7.6 * 60,
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
  'id_edm': {
    id: 'id_edm',
    name: 'EDM Bất hủ cho dân cày liên minh',
    singer: {
      id: 'uid_edm-001',
      name: 'EDM',
    },
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/edm-lol.mp3?alt=media&token=12c88e8f-7385-450d-9e0d-8b22ff246e81',
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    listenNumber: 1241562,
    time: 6.6 * 60,
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
  'id_001': {
    id: 'id_001',
    name: 'Sao em vô tình',
    singer: {
      id: 'uid_jack-001',
      name: 'Jack',
    },
    src: '/static/musics/sao-em-vo-tinh.mp3',
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    listenNumber: 1241562,
    time: 9.6 * 60,
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
  'id_002': {
    id: 'id_002',
    name: 'Bạc phận',
    singer: {
      id: 'uid_jack-001',
      name: 'Jack',
    },
    listenNumber: 1241562,
    time: 1.6 * 60,
    src: '/static/musics/bac-phan.mp3',
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
  'id_003': {
    id: 'id_003',
    name: 'Hồng nhan',
    singer: {
      id: 'uid_jack-001',
      name: 'Jack',
    },
    listenNumber: 1241562,
    time: 10.6 * 60,
    src: '/static/musics/hong-nhan.mp3',
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
  'id_004': {
    id: 'id_004',
    name: 'Lost Control',
    singer: {
      id: 'uid_walker-001',
      name: 'Alan Walker',
    },
    listenNumber: 1241562,
    time: 14.6 * 60,
    src: '/static/musics/lost-control.mp3',
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
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
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
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
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
};

const defaultState = {
  id: 'pid_001',
  name: 'Nhạc Việt Nam nhẹ nhàng',
  loveNumber: 1984245,
  img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
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
