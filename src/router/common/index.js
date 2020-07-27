export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/home-page',
    children: [
      {
        path: 'home-page',
        name: 'HomePage',
        component: () => import('@/views/home-page'),
      },
    ],
  },
]
