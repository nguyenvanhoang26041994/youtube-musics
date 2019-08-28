import * as actionCreators from '../actions';

export default async ({ query, reduxStore: store, isServer }) => {
  const callApiStack = [
    store.dispatch(actionCreators.getTrendingPlaylists()),
    store.dispatch(actionCreators.getTrendingSongs()),
    store.dispatch(actionCreators.getTrendingSingers()),
  ];

  await store.dispatch(actionCreators.getTopics());

  let callTopicMusicsApi = Promise.resolve({});
  const topics = store.getState().homePageReducer.topics;

  if (topics && topics[0]) {
    callTopicMusicsApi = store.dispatch(actionCreators.getTopicMusics(topics[0].id));
  }

  // in client-side await will be stop render
  if (isServer) {
    await Promise.all([
      ...callApiStack,
      callTopicMusicsApi,
    ]);
  }

  return {};
}
