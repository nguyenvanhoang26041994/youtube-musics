export default music => ({
  ...music,
  singersName: music.singers.map(singer => singer.name).join(', '),
});
