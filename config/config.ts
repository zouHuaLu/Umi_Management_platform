import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式路由
  routes,
  fastRefresh: {},
});
