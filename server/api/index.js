const express = require('express');
const router = express.Router();
const fp = require('lodash/fp');

const profiles = require('../data/profiles');
const { profilesAsObject } = require('../data/profiles');
const musics = require('../data/musics');
const { musicsAsObject } = require('../data/musics');
const playlists = require('../data/playlists');
const { playlistsAsObject } = require('../data/playlists');

router.get('/profile/:id', (req, res) => {
  return res.json(profilesAsObject[req.params.id]);
});

router.get('/playlist/:id', (req, res) => {
  return res.json(playlistsAsObject[req.params.id]);
});

router.get('/music/:id', (req, res) => {
  return res.json(musicsAsObject[req.params.id]);
});

router.get('/profiles', (req, res) => {
  const { rank, role, pageSize, pageNumber } = req.query;
  return res.json(profiles);
});

router.get('/musics', (req, res) => {
  const { belongTo, rank, pageSize, pageNumber } = req.query;
  const singerId = belongTo;

  return res.json(fp.filter(music =>
    music.singers
      .filter(singer => {
        if (singerId) {
          return singer.id === singerId;
        }
        
        return true;
      }).length)(musics)
  );
});


router.get('/playlists', (req, res) => {
  const { rank, pageSize, pageNumber } = req.query;
  if (rank === 'trend') {
    return res.json(playlists);
  }

  return res.json([]);
});

module.exports = router;
