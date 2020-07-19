import homePage from './home-page'
export default [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/home-page',
    children: [ ...homePage ],
  },
]
