import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default {
  plugins: [svgr(), react()],
  base: './',
};
