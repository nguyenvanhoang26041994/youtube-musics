import fetch from 'isomorphic-fetch';

const parseJSON = response =>
  response && response.json
    ? response.json()
    : null;

const request = (url, options) => fetch(url, options)
  .then(response => parseJSON(response));

export default request;
