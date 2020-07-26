import HomePage from './home-page'
export default [
  {
    path: '/',
    component: () => import('@/views/layout'),

    redirect: '/home-page',
    children: [ ...HomePage ],
  },

  // {
  //   path: '/test',
  //   component: () => import('@/views/test'),
  //   hidden: true,
  //   verify: true,
  //   children: [
  //     {
  //       path: ':list',
  //       component: () => import('@/views/test/list'),
  //     },
  //   ],
  // },
]
