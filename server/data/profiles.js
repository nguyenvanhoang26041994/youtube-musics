const fp = require('lodash/fp');
const singers = require('./singers');

const profiles = [
  ...singers,
];

const profilesAsObject = {};

profiles.map(profile => {
  profilesAsObject[profile.id] = profile;
});

module.exports = profiles;
module.exports.profilesAsObject = profilesAsObject;


