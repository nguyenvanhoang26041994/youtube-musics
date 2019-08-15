import { createSelector } from 'reselect';
import musicFormater from './utils/musicFormater'

export default state => musicFormater(state.playingMusic);
