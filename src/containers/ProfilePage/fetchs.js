import fetch from 'isomorphic-fetch';

export const fetchProfile = id =>
  fetch (`http://localhost:3000/api/profile/ed-sheeran`)
    .then(response => response.json())
    .catch(() => ({}));