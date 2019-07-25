import fp from 'lodash/fp';
import tailwindConfig from '../../tailwind.config';

const colors = tailwindConfig.theme.colors;
const tailwindColors = {};

fp.compose(
  fp.forEach(key => {
    if (typeof colors[key] === 'string') {
      return tailwindColors[key] = colors[key];
    }

    fp.compose(
      fp.forEach(_key => {
        return tailwindColors[`${key}-${_key}`] = colors[key][_key];
      }),
      fp.keys,
    )(colors[key])
  }),
  fp.keys
)(colors);

export default tailwindColors;
