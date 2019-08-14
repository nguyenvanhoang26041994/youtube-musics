import { playlist, mode } from '../constants/playing-list';

const nextMode = Object.freeze({
  [mode.LOOP]: mode.SHUFFLE,
  [mode.SHUFFLE]: mode.REPEAT,
  [mode.REPEAT]: mode.LOOP,
});

const musics = [
  {
    id: 'iQp1_GfDhwQ',
    name: `I'll Be There`,
    singers: [
      { id: 'jess-glynne', name: 'Jess Glynne' },
    ],
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20jess_glynne_ill_be_there_official_video_iQp1_GfDhwQ.mp3?alt=media&token=4756169d-1012-42ab-a0a1-5c1109258dd2',
    img: 'https://thespinoff.co.nz/wp-content/uploads/2018/10/Jess-Glynne-Jul-2018.jpg',
    listenNumber: 10000,
    time: 3 * 60 + 19,
  },
  {
    id: '87gWaABqGYs',
    name: `Galway Girl`,
    singers: [
      { id: 'ed-sheeran', name: 'Ed Sheeran' },
    ],
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20ed_sheeran_galway_girl_official_video_87gWaABqGYs.mp3?alt=media&token=d2f36088-51e1-43a6-b89c-638b19bafead',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Ed_Sheeran_2013.jpg',
    listenNumber: 1000,
    time: 3 * 60 + 19,
  },
  {
    id: 'iKzRIweSBLA',
    name: `Perfect`,
    singers: [
      { id: 'ed-sheeran', name: 'Ed Sheeran' },
    ],
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20ed_sheeran_perfect_official_lyric_video_iKzRIweSBLA.mp3?alt=media&token=75fa5dad-564b-48f8-ac4b-1cb6199cffb6',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Ed_Sheeran_2013.jpg',
    listenNumber: 7990,
    time: 4 * 60 + 23,
  },
  {
    id: 'S2oxFIsENgM',
    name: `Please Don't Go`,
    singers: [
      { id: 'joel-adams', name: 'Joel Adams' },
    ],
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20joel_adams_please_dont_go_official_music_video_S2oxFIsENgM.mp3?alt=media&token=fe3f698b-b178-4166-95b5-33597fb050bf',
    img: 'https://www.thefamouspeople.com/profiles/images/joel-adams-1.jpg',
    listenNumber: 7990,
    time: 3 * 60 + 32,
  },
  {
    id: 'id_edm',
    name: 'EDM Bất hủ cho dân cày liên minh',
    singers: [
      { id: 'uid_edm-004', name: 'Meow' },
      { id: 'alan_walker', name: 'Kyo' },
    ],
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/edm-lol.mp3?alt=media&token=12c88e8f-7385-450d-9e0d-8b22ff246e81',
    img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
    listenNumber: 1241562,
    time: 60 * 60 + 17,
    imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  },
  {
    id: 'cHHLHGNpCSA',
    name: `Waiting For Love`,
    singers: [
      { id: 'cvicii', name: 'Avicii' },
    ],
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20avicii_waiting_for_love_cHHLHGNpCSA.mp3?alt=media&token=5a385519-d6e0-4cd1-add8-7477e01f0b54',
    img: 'https://avatar-nct.nixcdn.com/singer/avatar/2017/11/18/7/a/1/0/1510943948217_600.jpg',
    listenNumber: 10000,
    time: 3 * 60 + 50,
  },
  {
    id: 'j4zP5saRZqg',
    name: `Sóng Gió`,
    singers: [
      { id: 'huong-ly-cover', name: 'Hương Ly Cover' },
    ],
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20song_gio_k_icm_x_jack_huong_ly_cover_j4zP5saRZqg.mp3?alt=media&token=d9bff901-8a24-47fb-a53a-014cf853530f',
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/0/4/5/0045c2c267f85e85eef5fd53b4b2b231.jpg',
    listenNumber: 10500,
    time: 4 * 60 + 35,
  },
  {
    id: 'yaJx0Gj_LCY',
    name: `Wish You Were Gay`,
    singers: [
      { id: 'billie-eilish', name: 'Billie Eilish' },
    ],
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20billie_eilish_wish_you_were_gay_audio_yaJx0Gj_LCY.mp3?alt=media&token=046b629a-6df5-4e40-bcfb-2a850ea3c0bd',
    img: 'https://luxury-inside.vn/data/uploads/2019/07/BILLIE-EILISH.jpg',
    listenNumber: 10500,
    time: 3 * 60 + 41,
  },
];

const defaultState = {
  id: 'pid_001',
  name: 'Nhạc cực hay mọi thể loại tuyển chọn',
  loveNumber: 1984245,
  img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  musics,
  user: {
    name: 'Nguyễn Văn Hoàng',
    id: 'uid_001',
  },
  mode: mode.LOOP,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case playlist.CHANGE_PLAYING_LIST:
      return {
        ...state,
        ...action.payload,
      };
    case playlist.CHANGE_MODE:
      return {
        ...state,
        mode: payload,
      };
    case playlist.CHANGE_TO_NEXT_MODE:
      return {
        ...state,
        mode: nextMode[state.mode] || state.mode,
      };
    default:
      return state;
  }
};
