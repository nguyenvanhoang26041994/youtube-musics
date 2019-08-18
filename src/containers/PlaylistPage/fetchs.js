import fetch from 'isomorphic-fetch';
import { apiServers } from '../../../config-vars';

export const fetchPlaylist = id => new Promise((resolve, reject) =>
  fetch(`${apiServers.main}/api/playlist/${id}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
  );
