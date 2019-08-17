import fetch from 'isomorphic-fetch';

const root = process.env.NODE_ENV === 'production'
  ? 'https://youtube-musics.herokuapp.com'
  : 'http://localhost:3000'

export const fetchProfile = id => new Promise((resolve, reject) =>
  fetch(`${root}/api/profile/${id}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
  );

export const fetchOwnerMusics = id => new Promise((resolve, reject) =>
  fetch(`${root}/api/musics?belongTo=${id}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
);
