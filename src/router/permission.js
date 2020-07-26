import router from  '.'
import store from '@/store'
import {
  getToken,
} from '@/unit/token'

router.beforeEach(async (to, from, next) => {
  const token = getToken()

  console.log(`from ${from.fullPath}`)
  console.log(`to ${to.fullPath}`)

  // 不能时fullPath
  if (to.path === '/login') {
    if (token) {
      next('/')
    } else {
      next()
    }
  } else {
    if (token) {
      try {
        const  hasRoles = store.getters.roles && store.getters.roles.length > 0

        if (hasRoles) {
          next()
        } else {
          const {
            roles,
          } = await store.dispatch('user/userInfo')

          let routes = await store.dispatch('permission/generateRoutes', roles)

          router.addRoutes(routes)
          next()
        }
      } catch (err) {
        next(new Error(err))
      }
    } else {
      next(`/login?next=${to.path}`)
    }
  }
})

// router.beforeEach(async (to, from, next) => {
//   const token = getToken()

//   if (token) {

//     // 不能是fullPath
//     if (to.path === '/login') {
//       next('/')
//     } else {
//       const  hasRoles = store.getters.roles && store.getters.roles.length > 0

//       if (hasRoles) {
//         next()
//       } else {
//         try {
//           const {
//             roles,
//           } = await store.dispatch('user/userInfo')

//           let routes = await store.dispatch('permission/generateRoutes', roles)

//           router.addRoutes(routes)
//           next()

//         } catch (err) {
//           next(new Error(err))
//         }
//       }
//     }
//   } else {
//     if (to.path === '/login') {
//       next()
//     } else {
//       next(`/login?next=${to.path}`)
//     }
//   }
// })
