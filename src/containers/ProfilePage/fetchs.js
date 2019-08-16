import fetch from 'isomorphic-fetch';

const root = process.env.NODE_ENV === 'production'
  ? 'https://youtube-musics.herokuapp.com'
  : 'http://localhost:3000'

export const fetchProfile = id =>
  fetch (`${root}/api/profile/${id}`)
    .then(response => response.json())
    .catch(() => ({}));
