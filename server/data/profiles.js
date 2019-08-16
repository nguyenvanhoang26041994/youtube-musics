const fp = require('lodash/fp');

const profiles = [
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
];

const profilesAsObject = {};

profiles.map(profile => {
  profilesAsObject[profile.id] = profile;
});

module.exports = profiles;
module.exports.profilesAsObject = profilesAsObject;


