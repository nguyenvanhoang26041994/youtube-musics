import fetch from 'isomorphic-fetch';

const root = process.env.NODE_ENV === 'production'
  ? 'https://youtube-musics.herokuapp.com'
  : 'http://localhost:3000'

export const fetchPlaylist = id => new Promise((resolve, reject) =>
  fetch(`${root}/api/playlist/${id}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
  );
