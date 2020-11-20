import { defineConfig } from 'umi';
import PageRoutes from './router.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: PageRoutes,
});
