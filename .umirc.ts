import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式路由
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/Test' },
  ],
  fastRefresh: {},
});
