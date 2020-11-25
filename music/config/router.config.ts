const PageRoutes = [
  {
    path: '/', 
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        name: "default",
        hideInMenu: true,   // 在Menu 中隐藏
        redirect: '/home'  // 重定向
      },
      {
        path: "/home",
        name: "home",
        component: "./home",
      },
      {
        path: '/canvas',
        name: 'canvas',
        component: './canvas',
      },
    ],
  }
];

export default PageRoutes;