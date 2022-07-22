export default [
  { path: '/', component: '@/pages/index', name: '首页' },
  { path: '/test', component: '@/pages/Test', name: '测试页面' },
  {
    path: '/stu',
    name: '学院管理',
    routes: [
      {
        path: '/stu/list',
        component: '@/pages/stu/StuList.tsx',
        name: '学院列表',
      },
      {
        path: '/stu/pub',
        component: '@/pages/stu/StuPub.tsx',
        name: '学院录入',
      },
    ],
  },
];
