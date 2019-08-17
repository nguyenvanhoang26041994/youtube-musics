const express = require('express');
const router = express.Router();
const fp = require('lodash/fp');

const { profilesAsObject } = require('../data/profiles');
const musics = require('../data/musics');

router.get('/profile/:id', (req, res) => {
  res.json(profilesAsObject[req.params.id]);
});

router.get('/musics', (req, res) => {
  const { belongTo: singerId } = req.query;
  res.json(fp.filter(music =>
    music.singers
      .filter(singer => singer.id === singerId).length)(musics)
  );
});

module.exports = router;
