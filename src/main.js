import dynamic from 'next/dynamic';

export default dynamic(() => import('./App'), { ssr: !process.env.APP_MODE === 'SPA' });
