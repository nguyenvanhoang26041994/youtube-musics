import fetch from 'isomorphic-fetch';
import queryString from 'query-string';
import { apiServers } from '../../../config-vars';

export const fetchTrendingPlaylists = params => new Promise((resolve, reject) => {
  const query = queryString.stringify({ rank: 'trend', ...params });

  return fetch(`${apiServers.main}/api/playlists?${query}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
});

export const fetchTrendingSongs = params => new Promise((resolve, reject) => {
  const query = queryString.stringify({ rank: 'trend', ...params });

  return fetch(`${apiServers.main}/api/musics?${query}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
});

export const fetchTrendingSingers = params => new Promise((resolve, reject) => {
  const query = queryString.stringify({ role: 'singer', ...params });

  return fetch(`${apiServers.main}/api/profiles?${query}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
});
