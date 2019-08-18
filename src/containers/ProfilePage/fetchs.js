import fetch from 'isomorphic-fetch';
import { apiServers } from '../../../config-vars';

export const fetchProfile = id => new Promise((resolve, reject) =>
  fetch(`${apiServers.main}/api/profile/${id}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
  );

export const fetchOwnerMusics = id => new Promise((resolve, reject) =>
  fetch(`${apiServers.main}/api/musics?belongTo=${id}`)
    .then(response => resolve(response.json()))
    .catch(e => reject(e))
  );
