const express = require('express');
const router = express.Router();

const { profilesAsObject } = require('../data/profiles');

router.get('/profile/:id', (req, res) => {
  res.json(profilesAsObject[req.params.id]);
});

module.exports = router;
