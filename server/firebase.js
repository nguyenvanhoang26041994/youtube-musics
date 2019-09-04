const firebase = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://musics-2bfdc.firebaseio.com"
});

const database = firebase.database();

module.exports = firebase;
module.exports.database = database;
