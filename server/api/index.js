const express = require('express');
const router = express.Router();
const fp = require('lodash/fp');

const Singer = require('../mongodb/models/Singer');
const Music = require('../mongodb/models/Music');
const Playlist = require('../mongodb/models/Playlist');
const Topic = require('../mongodb/models/Topic');

router.get('/profile/:id', async (req, res) => {
  const singer = await Singer.findOne({ id: req.params.id });
  return res.json(singer);
});

router.get('/playlist/:id', async (req, res) => {
  const playlist = await Playlist.findOne({ id: req.params.id });
  return res.json(playlist);
});

router.get('/music/:id', async (req, res) => {
  const { lyrics } = req.query;
  const music = await Music.findOne({ id: req.params.id });
  return res.json(music);
});

router.get('/profiles', async (req, res) => {
  const { rank, role, pageSize, pageNumber } = req.query;
  const singers = await Singer.find({}, null, {
    sort: { createdAt: 'desc' },
    skip: 0,
    limit: pageNumber || 10,
  });

  return res.json(singers);
});

router.get('/topics', async (req, res) => {
  const { rank, role, pageSize, pageNumber } = req.query;
  const topics = await Topic.find({}, null , { sort: { createdAt: 'desc' }, skip: 0, limit: 5 });

  return res.json(topics);
});

router.get('/topic/:id/musics', async (req, res) => {
  const { rank, role, pageSize, pageNumber } = req.query;
  const topic = await Topic.findOne({ id: req.params.id });
  return res.json(fp.shuffle(topic.musics));
});

router.get('/musics', async (req, res) => {
  const { belongTo, rank, pageSize, pageNumber } = req.query;
  const singerId = belongTo;
  const musics = await Music.find({}, null, { sort: { createdAt: 'desc' }, skip: 0, limit: 20 });

  return res.json(musics);
});


router.get('/playlists', async (req, res) => {
  const { rank, pageSize, pageNumber } = req.query;
  const playlists = await Playlist.find({}, null, { sort: { createdAt: 'desc' }, skip: 0, limit: 20 });

  return res.json(playlists);
});

router.get('/crud', async (req, res) => {
  return res.json([])
});

module.exports = router;
