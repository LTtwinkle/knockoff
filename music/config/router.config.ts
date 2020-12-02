const PageRoutes = [
  {
    path: '/', 
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        name: "default",
        hideInMenu: true,   // 在Menu 中隐藏
        redirect: '/findMusic'  // 重定向
      },
      {
        path: "/findMusic",
        name: "findMusic",
        component: "./findMusic",
      },
      {
        path: '/video',
        name: 'video',
        component: './video',
      },
      {
        path: '/friend',
        name: 'friend',
        component: './friend',
      },
      {
        path: '/liveStream',
        name: 'liveStream',
        component: './liveStream',
      },
      {
        path: '/personalFM',
        name: 'personalFM',
        component: './personalFM',
      },
      {
        path: '/myMusic',
        name: 'myMusic',
        component: './myMusic',
      },
      {
        path: '/createPlayList',
        name: 'createPlayList',
        component: './createPlayList',
      },
      {
        path: '/collectPlayList',
        name: 'collectPlayList',
        component: './collectPlayList',
      },
    ],
  }
];

export default PageRoutes;