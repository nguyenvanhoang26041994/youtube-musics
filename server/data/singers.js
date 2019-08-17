const singers = [
  {
    id: 'avicii',
    name: 'Avicii',
    displayRole: 'famous-producer',
    isVerified: true,
    qoute: {
      text: 'Beauty has so many forms, and I think the most beautiful thing is confidence and loving yourself.',
      author: 'Kiesza',
    },
    avatarImg: 'http://kenh14cdn.com/crop/640_360/2019/6/7/082903-tim-studio2271-15598950807911850192687-crop-15598952164482123884955.jpg',
    coverImg: 'https://media.distractify.com/brand-img/6PW-bw8P-/480x252/how-is-avicii-releasing-music-3-1559943581638.jpg',
  },
  {
    id: 'ncs',
    name: 'No Copyright Sounds',
    displayRole: 'supper-cool',
    isVerified: false,
    qoute: {},
    avatarImg: 'https://zmp3-photo-fbcrawler.zadn.vn/avatars/b/c/0/d/bc0d7f8d36ef96a040eaad24095d34b9.jpg',
    coverImg: 'https://s1-ssl.dmcdn.net/v/Kxbeg1T1CXisFvuzM/x240',
  },
  {
    id: 'ed-sheeran',
    name: 'Ed Sheeran',
    displayRole: 'famous-singer',
    isVerified: true,
    qoute: {
      text: 'Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same',
      author: 'Helen Keller',
    },
    avatarImg: 'https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_1700,q_auto:eco,w_1133/https://inews.co.uk/wp-content/uploads/2018/09/Ed-Sheeran-credit-Mark-Surridge.jpg',
    coverImg: 'https://musically.com/wp-content/uploads/2017/01/ed-sheeran-1500x500.jpg',
  },
  {
    id: 'jess-glynne',
    name: 'Jess Glynne',
    displayRole: 'famous-singer',
    isVerified: true,
    qoute: {
      text: 'Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same',
      author: 'Helen Keller',
    },
    avatarImg: 'https://thewestreviewdotcom.files.wordpress.com/2016/06/img_8405.jpg',
    coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaIjeAqCPuKJzVmwgDJf4ui8YV99UAY-hJLPF7JkRYIcvTCaw',
  },
];

const singersAsObject = {};

singers.map(singer => {
  singersAsObject[singer.id] = singer;
});

module.exports = singers;
module.exports.singersAsObject = singersAsObject;
