const musics = require('./musics');

const templeData = [
  { time: 0, text: `No I can't forget this evening or your face as you were leaving` },
  { time: 0, text: `But I guess that's just the way the story goes` },
  { time: 0, text: `You always smile, but in your eyes` },
  { time: 0, text: `Your sorrow shows` },
  { time: 0, text: `Yes, it shows` },
  { time: 0, text: `No I can't forget tomorrow` },
  { time: 0, text: `When I think of all my sorrow` },
  { time: 0, text: `When I had you there but then I let you go` },
  { time: 0, text: `And now it's only fair that I should let you know` },
  { time: 0, text: `What you should know` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `If living is without you` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `I can't give anymore` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `If living is without you` },
  { time: 0, text: `I can't give` },
  { time: 0, text: `I can't give anymore` },
  { time: 0, text: `Well, I can't forget this evening or your face as you were leaving` },
  { time: 0, text: `But I guess that's just the way the story goes` },
  { time: 0, text: `You always smile, but in your eyes` },
  { time: 0, text: `Your sorrow shows` },
  { time: 0, text: `Yes, it shows` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `If living is without you` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `I can't give anymore` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `If living is without you` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `I can't give anymore` },
  { time: 0, text: `No no no no I can't live` },
  { time: 0, text: `If living is without you` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `I can't give anymore` },
  { time: 0, text: `I can't live` },
  { time: 0, text: `ff` },
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
