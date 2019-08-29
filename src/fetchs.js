import fetch from 'isomorphic-fetch';
import queryString from 'query-string';
import { apiServers } from '../config-vars';

// Lyrics is a huge rerouse so we fetch them when we really need
export const fetchMusicWithLyrics = id => new Promise((resolve, reject) => {
  const query = queryString.stringify({ lyrics: true });

  return fetch(`${apiServers.main}/api/music/${id}?${query}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
});
