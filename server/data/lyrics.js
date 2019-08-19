const musics = require('./musics');

const templeData = [
  { time: 0, text: `You said that we would always be` },
  { time: 0, text: `Without you I feel lost at sea` },
  { time: 0, text: `Through the darkness you'd hide with me` },
  { time: 0, text: `Like the wind we'd be wild and free` },
  { time: 0, text: `You` },
  { time: 0, text: `Said you'd follow me anywhere` },
  { time: 0, text: `But your eyes` },
  { time: 0, text: `Tell me you won't be there` },
  { time: 0, text: `I got to learn how to love without you` },
  { time: 0, text: `I got to carry my cross without you` },
  { time: 0, text: `Stuck in the middle and I'm just about to` },
  { time: 0, text: `Figure it out without you` },
  { time: 0, text: `And I'm done sitting home without you` },
  { time: 0, text: `Fuck I'm going out without you` },
  { time: 0, text: `I'm going to tear this city down without you` },
  { time: 0, text: `I'm going Bonnie and Clyde without you` },
  { time: 0, text: `Now I'm running away my dear` },
  { time: 0, text: `From myself and the truth I fear` },
  { time: 0, text: `My heart is beating I can't see clear` },
  { time: 0, text: `How I'm wishing that you were here` },
  { time: 0, text: `You` },
  { time: 0, text: `Said you'd follow me anywhere` },
  { time: 0, text: `But your eyes` },
  { time: 0, text: `Tell me you won't be there` },
  { time: 0, text: `I got to learn how to love without you` },
  { time: 0, text: `I got to carry my cross without you` },
  { time: 0, text: `Stuck in the middle and I'm just about to` },
  { time: 0, text: `Figure it out without you` },
  { time: 0, text: `And I'm done sitting home without you` },
  { time: 0, text: `Fuck I'm going out without you` },
  { time: 0, text: `I'm going to tear this city down without you` },
  { time: 0, text: `I'm going Bonnie and Clyde without you` },
  
];

const d = musics.map(music => ({
  id: music.id,
  data: templeData,
}));

const lyrics = [
  ...d,
  {
    id: 'WRz2MxhAdJo',
    data: templeData,
  }
];

const lyricsAsObject = {};

lyrics.map(lyric => {
  lyricsAsObject[lyric.id] = lyric;
});

module.exports = lyrics;
module.exports.lyricsAsObject = lyricsAsObject;
