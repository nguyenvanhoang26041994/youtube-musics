import fp from 'lodash/fp';
import { createSelector } from 'reselect';
import playlistFormater from './utils/playlistFormater';

export default state => playlistFormater(state.playingList);
