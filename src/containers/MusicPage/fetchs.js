import fetch from 'isomorphic-fetch';
import { apiServers } from '../../../config-vars';

export const fetchMusic = id => new Promise((resolve, reject) =>
  fetch(`${apiServers}/api/music/${id}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
  );
