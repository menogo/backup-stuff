let api = null
const debug = window.location.search
const env = debug.split('=')[1]
const envApi = {
  dev: 'http://127.0.0.1:3000/',
  d1: 'https://ibankibpu1.pingan.com.cn/ibd/rest/',
  stg1: 'https://stg1.com/ibd/rest/'
}

if (envApi[env]) {
  api = envApi[env]
  console.warn(`

    Api endpoint at: ${api}

  `)
} else {
  api = envApi.dev
  console.warn(`

    env not found! Api endpoint at: ${api}

  `)
}

api = debug ? envApi[env] : 'https://cz.pingan.com.cn/ibd/rest/'

// if (env) {
//   console.warn('API endpoint at: ' + api)
// } else {
//   console.warn('U\'re in: development mode, by accessing mock data')
// }

// switch (process.env.NODE_ENV) {
//   case 'production':
//     api = 'https://cz.pingan.com.cn/ibd/rest/'
//     break
//   case 'testing':
//     // api = 'https://ibankibduat.paic.com.cn/ibd/rest/'
//     api = 'https://ibankibpu1.pingan.com.cn/ibd/rest/'
//     // api = 'https://api.github.com/'
//     break
//   default:
//     api = 'http://127.0.0.1:3000/'
// }

const url = api
export default url

// development access 'domain.com' + '/ibd/rest/{module}/*.json'
// testing access     'domain.com' + '/ibd/rest/{module}/*.json'
// production access  'domain.com' + '/ibd/rest/{module}/*.json'
