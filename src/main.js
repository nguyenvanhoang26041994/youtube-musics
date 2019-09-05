import dynamic from 'next/dynamic';
import AppSSR from './App';

let App;
const mode = process.env.APP_MODE;

if (mode === 'SPA') {
  App = dynamic(() => import('./App'), { ssr: false });
} else {
  App = AppSSR;
}

export default App;
