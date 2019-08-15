
import fp from 'lodash/fp';

const anonimous = {
  id001: {
    id: 'id001',
    name: 'FlodD',
    img: 'https://product.hstatic.net/1000160337/product/figure_047753_01_1e2e998a53c84209a99c30eb17efb81f_1024x1024.jpg'
  },
  id002: {
    id: 'id002',
    name: 'M!',
    img: 'https://product.hstatic.net/1000160337/product/figure_047753_01_1e2e998a53c84209a99c30eb17efb81f_1024x1024.jpg'
  }
}

const singers = {
  'iQp1_GfDhwQ': [
    { id: 'jess-glynne', name: 'Jess Glynne' },
  ],
  '87gWaABqGYs': [
    { id: 'ed-sheeran', name: 'Ed Sheeran' },
  ],
  'iKzRIweSBLA': [
    { id: 'ed-sheeran', name: 'Ed Sheeran' },
  ],
  'S2oxFIsENgM': [
    { id: 'joel-adams', name: 'Joel Adams' },
  ],
  'cHHLHGNpCSA': [
    { id: 'cvicii', name: 'Avicii' },
  ],
  'j4zP5saRZqg': [
    { id: 'huong-ly-cover', name: 'Hương Ly Cover' },
  ],
  'yaJx0Gj_LCY': [
    { id: 'billie-eilish', name: 'Billie Eilish' },
  ],
  'Tv6WImqSuxA': [
    { id: 'ncs', name: 'No Copyright Sounds' },
  ],
  'SvRFNNbxuAk': [
    { id: 'ncs', name: 'No Copyright Sounds' },
  ],
  'u1I9ITfzqFs': [
    { id: 'ncs', name: 'No Copyright Sounds' },
  ],
  'fB8TyLTD7EE': [
    { id: 'lol', name: 'League of Legends' },
  ],
  'RfXLyP2_XbA': [
    { id: 'deamn', name: 'DEAMN' },
  ],
  'vBGiFtb8Rpw': [
    { id: 'ncs', name: 'No Copyright Sounds' },
  ],
  'kXYiU_JCYtU': [
    { id: 'linkin-park', name: 'Linkin Park' },
  ],
  'IgCphQCkHSk': [
    { id: 'conor-maynard', name: 'Conor Maynard' },
  ],
  '50VNCymT-Cs': [
    { id: 'alec-benjamin', name: 'Alec Benjamin' },
  ],
  'oyEuk8j8imI': [
    { id: 'justin-bieber', name: 'Justin Bieber' },
  ],
  'RPYumdhRMkU': [
    { id: 'charlie-puth', name: 'Charlie Puth' },
  ],
  'afNQLlTRvfM': [
    anonimous.id001,
    anonimous.id002,
  ],
};

const musics = [
  {
    id: 'iQp1_GfDhwQ',
    name: `I'll Be There`,
    singers: singers['iQp1_GfDhwQ'],
    singersName: singers['iQp1_GfDhwQ'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20jess_glynne_ill_be_there_official_video_iQp1_GfDhwQ.mp3?alt=media&token=4756169d-1012-42ab-a0a1-5c1109258dd2',
    img: 'https://thespinoff.co.nz/wp-content/uploads/2018/10/Jess-Glynne-Jul-2018.jpg',
    listenCount: 10000,
    time: 3 * 60 + 19,
  },
  {
    id: '87gWaABqGYs',
    name: `Galway Girl`,
    singers: singers['87gWaABqGYs'],
    singersName: singers['87gWaABqGYs'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20ed_sheeran_galway_girl_official_video_87gWaABqGYs.mp3?alt=media&token=d2f36088-51e1-43a6-b89c-638b19bafead',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Ed_Sheeran_2013.jpg',
    listenCount: 1000,
    time: 3 * 60 + 19,
  },
  {
    id: 'iKzRIweSBLA',
    name: `Perfect`,
    singers: singers['iKzRIweSBLA'],
    singersName: singers['iKzRIweSBLA'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20ed_sheeran_perfect_official_lyric_video_iKzRIweSBLA.mp3?alt=media&token=75fa5dad-564b-48f8-ac4b-1cb6199cffb6',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Ed_Sheeran_2013.jpg',
    listenCount: 7990,
    time: 4 * 60 + 23,
  },
  {
    id: 'S2oxFIsENgM',
    name: `Please Don't Go`,
    singers: singers['S2oxFIsENgM'],
    singersName: singers['S2oxFIsENgM'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20joel_adams_please_dont_go_official_music_video_S2oxFIsENgM.mp3?alt=media&token=fe3f698b-b178-4166-95b5-33597fb050bf',
    img: 'https://www.thefamouspeople.com/profiles/images/joel-adams-1.jpg',
    listenCount: 7990,
    time: 3 * 60 + 32,
  },
  // {
  //   id: 'id_edm',
  //   name: 'EDM Bất hủ cho dân cày liên minh',
  //   singers: [
  //     { id: 'uid_edm-004', name: 'Meow' },
  //     { id: 'alan_walker', name: 'Kyo' },
  //   ],
  //   src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/edm-lol.mp3?alt=media&token=12c88e8f-7385-450d-9e0d-8b22ff246e81',
  //   img: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  //   listenCount: 1241562,
  //   time: 60 * 60 + 17,
  //   imgBlur: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/player-bg.jpg?alt=media&token=5176e0ee-7405-4478-90a7-ac260b48aee8',
  // },
  {
    id: 'cHHLHGNpCSA',
    name: `Waiting For Love`,
    singers: singers['cHHLHGNpCSA'],
    singersName: singers['cHHLHGNpCSA'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20avicii_waiting_for_love_cHHLHGNpCSA.mp3?alt=media&token=5a385519-d6e0-4cd1-add8-7477e01f0b54',
    img: 'https://avatar-nct.nixcdn.com/singer/avatar/2017/11/18/7/a/1/0/1510943948217_600.jpg',
    listenCount: 10000,
    time: 3 * 60 + 50,
  },
  {
    id: 'j4zP5saRZqg',
    name: `Sóng Gió`,
    singers: singers['j4zP5saRZqg'],
    singersName: singers['j4zP5saRZqg'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20song_gio_k_icm_x_jack_huong_ly_cover_j4zP5saRZqg.mp3?alt=media&token=d9bff901-8a24-47fb-a53a-014cf853530f',
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/0/4/5/0045c2c267f85e85eef5fd53b4b2b231.jpg',
    listenCount: 10500,
    time: 4 * 60 + 35,
  },
  {
    id: 'yaJx0Gj_LCY',
    name: `Wish You Were Gay`,
    singers: singers['yaJx0Gj_LCY'],
    singersName: singers['yaJx0Gj_LCY'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20billie_eilish_wish_you_were_gay_audio_yaJx0Gj_LCY.mp3?alt=media&token=046b629a-6df5-4e40-bcfb-2a850ea3c0bd',
    img: 'https://luxury-inside.vn/data/uploads/2019/07/BILLIE-EILISH.jpg',
    listenCount: 10500,
    time: 3 * 60 + 41,
  },
  {
    id: 'Tv6WImqSuxA',
    name: `High`,
    singers: singers['Tv6WImqSuxA'],
    singersName: singers['Tv6WImqSuxA'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20jpb_high_ncs_release_Tv6WImqSuxA.mp3?alt=media&token=d48ca186-5b90-4251-877c-45da12c437f2',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/No_Copyright_Sounds_logo.jpg/220px-No_Copyright_Sounds_logo.jpg',
    listenCount: 10500,
    time: 3 * 60 + 12,
  },
  {
    id: 'SvRFNNbxuAk',
    name: `Weakness`,
    singers: singers['SvRFNNbxuAk'],
    singersName: singers['SvRFNNbxuAk'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20prismo_weakness_ncs_release_SvRFNNbxuAk.mp3?alt=media&token=54026bc9-1f60-4b5e-aa77-ad988284d77a',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/No_Copyright_Sounds_logo.jpg/220px-No_Copyright_Sounds_logo.jpg',
    listenCount: 103500,
    time: 3 * 60 + 17,
  },
  {
    id: 'u1I9ITfzqFs',
    name: `Savannah`,
    singers: singers['u1I9ITfzqFs'],
    singersName: singers['u1I9ITfzqFs'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20diviners_savannah_feat_philly_k_ncs_release_u1I9ITfzqFs.mp3?alt=media&token=37bc2b34-9eb7-4c60-9926-4cc121da1ba3',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/No_Copyright_Sounds_logo.jpg/220px-No_Copyright_Sounds_logo.jpg',
    listenCount: 62523,
    time: 3 * 60 + 23,
  },
  {
    id: 'fB8TyLTD7EE',
    name: `Rise`,
    singers: singers['fB8TyLTD7EE'],
    singersName: singers['fB8TyLTD7EE'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20rise_ft_the_glitch_mob_mako_and_the_word_alive_worlds_2018_league_of_legends_fB8TyLTD7EE.mp3?alt=media&token=b1071b75-66f7-4c5c-9b04-daefe05b2db6',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqNZUH_l2-snZKbxnq4gaepnvjLPRlA9Xu7iL9NpQ1NPL5S-9',
    listenCount: 14512,
    time: 3 * 60 + 30,
  },
  {
    id: 'RfXLyP2_XbA',
    name: `Sign`,
    singers: singers['RfXLyP2_XbA'],
    singersName: singers['RfXLyP2_XbA'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20deamn_sign_lyric_RfXLyP2_XbA.mp3?alt=media&token=d8f7eb69-4de3-4b36-be6f-82eef9e52235',
    img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/2/a/2a9432384224546a75dfbb78679ff05a_1516949585.jpg',
    listenCount: 523,
    time: 3 * 60 + 11,
  },
  {
    id: 'vBGiFtb8Rpw',
    name: `Make Me Move`,
    singers: singers['vBGiFtb8Rpw'],
    singersName: singers['vBGiFtb8Rpw'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20culture_code_make_me_move_feat_karra_ncs_release_vBGiFtb8Rpw.mp3?alt=media&token=c94dddc2-aa9f-48c1-9288-c420132cee79',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/No_Copyright_Sounds_logo.jpg/220px-No_Copyright_Sounds_logo.jpg',
    listenCount: 63324,
    time: 3 * 60 + 16,
  },
  {
    id: 'kXYiU_JCYtU',
    name: `Numb`,
    singers: singers['kXYiU_JCYtU'],
    singersName: singers['kXYiU_JCYtU'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20numb_official_video_linkin_park_kXYiU_JCYtU.mp3?alt=media&token=95bb96ba-f8dc-475c-be84-e80cbd866662',
    img: 'https://in.bookmyshow.com/entertainment-news/wp-content/uploads/2017/07/Linkin-Park.jpg',
    listenCount: 6644,
    time: 3 * 60 + 6,
  },
  {
    id: 'IgCphQCkHSk',
    name: `Faded`,
    singers: singers['IgCphQCkHSk'],
    singersName: singers['IgCphQCkHSk'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20alan_walker_faded_IgCphQCkHSk.mp3?alt=media&token=989b2fa7-2d0f-48a8-84a2-e020aee7d581',
    img: 'https://image-ticketfly.imgix.net/00/03/23/92/42-og.png?w=500&h=652',
    listenCount: 734,
    time: 3 * 60 + 22,
  },
  {
    id: '50VNCymT-Cs',
    name: `Let Me Down Slowly`,
    singers: singers['50VNCymT-Cs'],
    singersName: singers['50VNCymT-Cs'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20alec_benjamin_let_me_down_slowly_official_music_video_50VNCymT-Cs.mp3?alt=media&token=92bb07c5-e303-47c4-ab5c-871165215557',
    img: 'https://www.billboard.com/files/styles/article_main_image/public/media/Alec-Benjamin-press-by-Alex-Currie-bb4-2019-billboard-1548.jpg',
    listenCount: 73534,
    time: 2 * 60 + 57,
  },
  {
    id: 'oyEuk8j8imI',
    name: `Love Yourself`,
    singers: singers['oyEuk8j8imI'],
    singersName: singers['oyEuk8j8imI'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20justin_bieber_love_yourself_official_video_oyEuk8j8imI.mp3?alt=media&token=6da85bd5-707b-46f1-8576-9585d4ed0b46',
    img: 'https://pbs.twimg.com/profile_images/898295311893880832/bCps4HFV_400x400.jpg',
    listenCount: 884,
    time: 4 * 60 + 32,
  },
  {
    id: 'RPYumdhRMkU',
    name: `One Call Away`,
    singers: singers['RPYumdhRMkU'],
    singersName: singers['RPYumdhRMkU'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20one_call_away_charlie_puth_lyrics_RPYumdhRMkU.mp3?alt=media&token=2f418870-36cf-4374-a6cf-45cb52a54598',
    img: 'https://www.mtrend.vn/wp-content/uploads/2019/06/Charlie-Puth-la-ai.jpg',
    listenCount: 884,
    time: 3 * 60 + 19,
  },
  {
    id: 'afNQLlTRvfM',
    name: `Ai Chờ Ai`,
    singers: singers['afNQLlTRvfM'],
    singersName: singers['afNQLlTRvfM'].map(singer => singer.name).join(', '),
    src: 'https://firebasestorage.googleapis.com/v0/b/musics-2bfdc.appspot.com/o/y2mate.com%20-%20aichoai_flod_ft_m_giang_nguyen_official_lyric_video_tas_release_afNQLlTRvfM.mp3?alt=media&token=d3f634e1-0b76-440a-81f6-9c10614c7a42',
    img: anonimous.id001.img,
    listenCount: 8345,
    time: 2 * 60 + 40,
  },
];

const musicsAsObject = {};

musics.map(music => {
  musicsAsObject[music.id] = music;
});

export default musics;
export { musicsAsObject };