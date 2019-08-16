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
  },
];

const profilesAsObject = {};

profiles.map(profile => {
  profilesAsObject[profile.id] = profile;
});

module.exports = profiles;
module.exports.profilesAsObject = profilesAsObject;


