const musics = require('./musics');

const templeData = [
  { timeStart: 18.375169, timeEnd: 22, text: `You said that we would always be` },
  { timeStart: 22.043055, timeEnd: 25, text: `Without you I feel lost at sea` },
  { timeStart: 25.555685, timeEnd: 29, text: `Through the darkness you'd hide with me` },
  { timeStart: 29.14166, timeEnd: 32, text: `Like the wind we'd be wild and free` },
  { timeStart: 32.602826, timeEnd: 35, text: `You` },
  { timeStart: 35.00244, timeEnd: 39, text: `Said you'd follow me anywhere` },
  { timeStart: 39.246661, timeEnd: 42, text: `But your eyes` },
  { timeStart: 42.469542, timeEnd: 46, text: `Tell me you won't be there` },
  { timeStart: 46.14863, timeEnd: 50, text: `I got to learn how to love without you` },
  { timeStart: 50.151754, timeEnd: 52, text: `I got to carry my cross without you` },
  { timeStart: 52.761334, timeEnd: 57, text: `Stuck in the middle and I'm just about to` },
  { timeStart: 57.732262, timeEnd: 60, text: `Figure it out without you` },
  { timeStart: 60.859577, timeEnd: 65, text: `And I'm done sitting home without you` },
  { timeStart: 65.002015, timeEnd: 67, text: `Fuck I'm going out without you` },
  { timeStart: 67.801443, timeEnd: 70, text: `I'm going to tear this city down without you` },
  { timeStart: 70.922741, timeEnd: 90, text: `I'm going Bonnie and Clyde without you` },
  { timeStart: 90.085049, timeEnd: 93, text: `Now I'm running away my dear` },
  { timeStart: 93.629205, timeEnd: 97, text: `From myself and the truth I fear` },
  { timeStart: 97.281172, timeEnd: 100, text: `My heart is beating I can't see clear` },
  { timeStart: 100.784682, timeEnd: 104, text: `How I'm wishing that you were here` },
  { timeStart: 104.430037, timeEnd: 106, text: `You` },
  { timeStart: 106.822089, timeEnd: 111, text: `Said you'd follow me anywhere` },
  { timeStart: 111.095953, timeEnd: 114, text: `But your eyes` },
  { timeStart: 114.405025, timeEnd: 118, text: `Tell me you won't be there` },
  { timeStart: 118.134925, timeEnd: 121, text: `I got to learn how to love without you` },
  { timeStart: 121.82626, timeEnd: 125, text: `I got to carry my cross without you` },
  { timeStart: 125.451517, timeEnd: 129, text: `Stuck in the middle and I'm just about to` },
  { timeStart: 129.377794, timeEnd: 132, text: `Figure it out without you` },
  { timeStart: 132.761339, timeEnd: 136, text: `And I'm done sitting home without you` },
  { timeStart: 136.904053, timeEnd: 139, text: `Fuck I'm going out without you` },
  { timeStart: 139.875741, timeEnd: 143, text: `I'm going to tear this city down without you` },
  { timeStart: 143.464291, timeEnd: 143, text: `I'm going Bonnie and Clyde without you` },
  { timeStart: 143.464291, timeEnd: 99999, text: `I'm going Bonnie and Clyde without you` },
  
];

const d = musics.map(music => ({
  id: music.id,
  data: templeData,
}));

const lyrics = [
  // ...d,
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
