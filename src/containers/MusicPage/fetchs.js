import fetch from 'isomorphic-fetch';

const root = process.env.NODE_ENV === 'production'
  ? 'https://youtube-musics.herokuapp.com'
  : 'http://localhost:3000'

export const fetchMusic = id => new Promise((resolve, reject) =>
  fetch(`${root}/api/music/${id}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
  );
