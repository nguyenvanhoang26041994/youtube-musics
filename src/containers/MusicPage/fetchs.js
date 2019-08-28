import fetch from 'isomorphic-fetch';
import { apiServers } from '../../../config-vars';

export const fetchMusic = id => new Promise((resolve, reject) =>
  fetch(`${apiServers.main}/api/music/${id}?lyrics=true`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
  );