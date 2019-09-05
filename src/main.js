import dynamic from 'next/dynamic';
import AppSSR from './App';

let App = AppSSR;

if (process.env.APP_MODE === 'SPA') {
  App = dynamic(() => import('./App'), { ssr: false });
}

export default App;
