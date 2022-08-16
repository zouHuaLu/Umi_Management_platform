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
  {
    path: '/cate',
    name: '分类管理',
    routes: [
      {
        path: '/cate/list',
        component: '@/pages/category/catelist.jsx',
        name: '分类列表',
      },
      {
        path: '/cate/pub',
        component: '@/pages/category/catepub.jsx',
        name: '分类录入',
      },
    ],
  },
];
