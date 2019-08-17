import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

const root = process.env.NODE_ENV === 'production'
  ? 'https://youtube-musics.herokuapp.com'
  : 'http://localhost:3000'

export const fetchTrendingPlaylists = params => new Promise((resolve, reject) => {
  const query = queryString.stringify({ rank: 'trend', ...params });

  return fetch(`${root}/api/playlists?${query}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
});

export const fetchTrendingSongs = params => new Promise((resolve, reject) => {
  const query = queryString.stringify({ rank: 'trend', ...params });

  return fetch(`${root}/api/musics?${query}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
});

export const fetchTrendingSingers = params => new Promise((resolve, reject) => {
  const query = queryString.stringify({ role: 'singer', ...params });

  return fetch(`${root}/api/profiles?${query}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
});
