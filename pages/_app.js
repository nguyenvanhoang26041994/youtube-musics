import dynamic from 'next/dynamic';

const App = dynamic(() => import('../src/main'), { ssr: false });

export default App;
